import { AllBeastGodCards, AllBeastGodCardsById } from 'model/Cards/BeastGod'
import { AllElementCards, AllElementCardsById } from 'model/Cards/Element'
import { AllEvilGodCards, AllEvilGodCardsById } from 'model/Cards/EvilGod'
import { AllHeavenGodCards, AllHeavenGodCardsById } from 'model/Cards/HeavenGod'
import { AllMaidenCards, AllMaidenCardsById } from 'model/Cards/Maiden'
import { AllNobleCards, AllNobleCardsById } from 'model/Cards/Noble'
import { AllNoneCards, AllNoneCardsById } from 'model/Cards/None'
import { AllPixieCards, AllPixieCardsById, Pixie } from 'model/Cards/Pixie'
import { AllSpiritCards, AllSpiritCardsById } from 'model/Cards/Spirit'
import { AllStageCards, AllStageCardsById, BedOfThorn } from 'model/Cards/Stage'
import { AllWorldCards, AllWorldCardsById, World } from 'model/Cards/World'
import { Entity } from 'model/Common'
import { TemperingProject } from 'model/Projects'

export type CardCategory =
  | 'World'
  | 'Stage'
  | 'Heaven God'
  | 'Evil God'
  | 'Noble'
  | 'Maiden'
  | 'Spirit'
  | 'Pixie'
  | 'Beast God'
  | 'Element'
  | undefined

export type Card = Entity & {
  readonly category: CardCategory
  readonly price: number
  readonly activate?: (project: TemperingProject, slot: CardSlot) => void
}

export type ActiveCard = Card & {
  readonly activate: (project: TemperingProject, slot: CardSlot) => void
}

export type CardSlot = 'pending' | 'hidden' | 'top' | 'middle' | 'bottom' | 'leaving'
export const Pending: CardSlot = 'pending'
export const Hidden: CardSlot = 'hidden'
export const Top: CardSlot = 'top'
export const Middle: CardSlot = 'middle'
export const Bottom: CardSlot = 'bottom'
export const Leaving: CardSlot = 'leaving'

export type CardContext = {
  sticky: boolean
  cards: { [slot in CardSlot]?: Card }
  worldPower?: Card
}

export const AllCards: Card[] = [
  ...AllWorldCards,
  ...AllStageCards,
  ...AllHeavenGodCards,
  ...AllEvilGodCards,
  ...AllNobleCards,
  ...AllMaidenCards,
  ...AllSpiritCards,
  ...AllPixieCards,
  ...AllBeastGodCards,
  ...AllElementCards,
  ...AllNoneCards
]

export const AllCardsById: { [id in string]: Card } = {
  ...AllWorldCardsById,
  ...AllStageCardsById,
  ...AllHeavenGodCardsById,
  ...AllEvilGodCardsById,
  ...AllNobleCardsById,
  ...AllMaidenCardsById,
  ...AllSpiritCardsById,
  ...AllPixieCardsById,
  ...AllBeastGodCardsById,
  ...AllElementCardsById,
  ...AllNoneCardsById
}

export function resetVolatileCards(context: CardContext) {
  context.sticky = true
  context.cards.pending = undefined
  context.cards.leaving = undefined
}

export function resolveWorldPower(context: CardContext) {
  const { bottom, middle, top, hidden } = context.cards

  context.worldPower = Array.of(bottom, middle, top, hidden).find(
    (card) => card === BedOfThorn || card?.category === World
  )
}

export function pushCards(context: CardContext) {
  const { sticky } = context
  const { pending, hidden, top, middle, bottom } = context.cards

  // pending: [Empty] => [Empty]
  // hidden:  [?????] => [?????]
  // top:     [?????] => [?????]
  // middle:  [?????] => [?????]
  // bottom:  [?????] => [?????]
  // leaving: [?????] => [?????]
  if (pending === undefined) {
    return
  }

  // pending: [CardA] => [CardA]
  // hidden:  [Empty] => [CardA]
  // top:     [?????] => [?????]
  // middle:  [?????] => [?????]
  // bottom:  [?????] => [?????]
  // leaving: [?????] => [?????]
  if (hidden == undefined) {
    context.cards.hidden = pending
    return
  }

  // pending: [CardA] => [CardA]
  // hidden:  [CardB] => [CardA]
  // top:     [Empty] => [CardB]
  // middle:  [?????] => [?????]
  // bottom:  [?????] => [?????]
  // leaving: [?????] => [?????]
  if (top === undefined) {
    context.cards.top = hidden
    context.cards.hidden = pending
    return
  }

  // pending: [CardA] => [CardA]
  // hidden:  [CardB] => [CardA]
  // top:     [CardC] => [CardB]
  // middle:  [Empty] => [CardC]
  // bottom:  [?????] => [?????]
  // leaving: [?????] => [?????]
  if (middle === undefined) {
    context.cards.middle = top
    context.cards.top = hidden
    context.cards.hidden = pending
    return
  }

  // pending: [CardA] => [CardA]
  // hidden:  [CardB] => [CardA]
  // top:     [CardC] => [CardB]
  // middle:  [CardD] => [CardC]
  // bottom:  [Empty] => [CardD]
  // leaving: [?????] => [?????]
  if (bottom === undefined) {
    context.cards.bottom = middle
    context.cards.middle = top
    context.cards.top = hidden
    context.cards.hidden = pending
    return
  }

  // pending: [CardA] => [CardA]
  // hidden:  [CardB] => [CardA]
  // top:     [CardC] => [CardB]
  // middle:  [CardD] => [CardC]
  // bottom:  [CardE] => [CardD]
  // leaving: [?????] => [CardE]
  // Only bottom-most Pixie cards prevent pushing
  if (!sticky || bottom.category !== Pixie) {
    context.cards.leaving = bottom
    context.cards.bottom = middle
    context.cards.middle = top
    context.cards.top = hidden
    context.cards.hidden = pending
    return
  }

  // pending: [CardA] => [CardA]
  // hidden:  [CardB] => [CardA]
  // top:     [CardC] => [CardB]
  // middle:  [CardD] => [CardC]
  // bottom:  [Pixie] => [Pixie]
  // leaving: [?????] => [CardD]
  if (middle.category !== Pixie) {
    context.cards.leaving = middle
    context.cards.middle = top
    context.cards.top = hidden
    context.cards.hidden = pending
    return
  }

  // pending: [CardA] => [CardA]
  // hidden:  [CardB] => [CardA]
  // top:     [CardC] => [CardB]
  // middle:  [Pixie] => [Pixie]
  // bottom:  [Pixie] => [Pixie]
  // leaving: [?????] => [CardC]
  if (top.category !== Pixie) {
    context.cards.leaving = top
    context.cards.top = hidden
    context.cards.hidden = pending
    return
  }

  // pending: [CardA] => [CardA]
  // hidden:  [CardB] => [CardA]
  // top:     [Pixie] => [Pixie]
  // middle:  [Pixie] => [Pixie]
  // bottom:  [Pixie] => [Pixie]
  // leaving: [?????] => [CardB]
  context.cards.leaving = hidden
  context.cards.hidden = pending
}