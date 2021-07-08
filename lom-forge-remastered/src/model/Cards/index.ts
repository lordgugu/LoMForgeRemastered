import { BedOfThorn } from 'model/Cards'
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

export const World: CardCategory = 'World'
export const Stage: CardCategory = 'Stage'
export const HeavenGod: CardCategory = 'Heaven God'
export const EvilGod: CardCategory = 'Evil God'
export const Noble: CardCategory = 'Noble'
export const Maiden: CardCategory = 'Maiden'
export const Spirit: CardCategory = 'Spirit'
export const Pixie: CardCategory = 'Pixie'
export const BeastGod: CardCategory = 'Beast God'
export const Element: CardCategory = 'Element'
export const None: CardCategory = undefined

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
  worldCard?: Card
}

export function resetVolatileCards(context: CardContext) {
  context.sticky = true
  context.cards.pending = undefined
  context.cards.leaving = undefined
}

export function setWorldCard(context: CardContext) {
  const { bottom, middle, top, hidden } = context.cards

  context.worldCard = Array.of(bottom, middle, top, hidden).find(
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

export function activateCards(project: TemperingProject) {
  Array.of(Leaving, Bottom, Middle, Top, Hidden).forEach((slot) => {
    const card = project.cards[slot]

    if (card && card.activate) {
      card.activate(project, slot)
    }
  })
}

export * from './BeastGod'
export * from './Element'
export * from './EvilGod'
export * from './HeavenGod'
export * from './Maiden'
export * from './Noble'
export * from './None'
export * from './Pixie'
export * from './Spirit'
export * from './Stage'
export * from './World'
