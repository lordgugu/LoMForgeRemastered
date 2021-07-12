import { Card, CardCategory } from 'model/Cards'
import { Phoenix, Unicorn } from 'model/Cards/BeastGod'

export const BeastGod: CardCategory = 'Beast God'

export const AllBeastGodCards: Card[] = [Phoenix, Unicorn]

export const AllBeastGodCardsById: { [id in string]: Card } = Object.fromEntries(
  AllBeastGodCards.map((card) => [card.id, card])
)

export * from './Phoenix'
export * from './Unicorn'
