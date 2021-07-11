import { Card, CardCategory } from 'model/Cards'
import { BedOfThorn, Metropolis, Spring, Tower, Volcano } from 'model/Cards/Stage'

export const Stage: CardCategory = 'Stage'

export const AllStageCards: Card[] = [BedOfThorn, Metropolis, Spring, Tower, Volcano]

export const AllStageCardsById: { [id in string]: Card } = Object.fromEntries(
  AllStageCards.map((card) => [card.id, card])
)

export * from './BedOfThorn'
export * from './Metropolis'
export * from './Spring'
export * from './Tower'
export * from './Volcano'
