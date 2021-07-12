import { Card, CardCategory } from 'model/Cards'
import { Cleric, Clown, King, Princess, Raven, Sorcerer, Witch, Wolf } from 'model/Cards/None'

export const None: CardCategory = undefined

export const AllNoneCards: Card[] = [Cleric, Clown, King, Princess, Raven, Sorcerer, Witch, Wolf]

export const AllNoneCardsById: { [id in string]: Card } = Object.fromEntries(
  AllNoneCards.map((card) => [card.id, card])
)

export * from './Cleric'
export * from './Clown'
export * from './King'
export * from './Princess'
export * from './Raven'
export * from './Sorcerer'
export * from './Witch'
export * from './Wolf'
