import { Card, CardCategory } from 'model/Cards'
import { ManOfValor, Sage, Wanderer } from 'model/Cards/Noble'

export const Noble: CardCategory = 'Noble'

export const AllNobleCards: Card[] = [ManOfValor, Sage, Wanderer]

export const AllNobleCardsById: { [id in string]: Card } = Object.fromEntries(
  AllNobleCards.map((card) => [card.id, card])
)

export * from './ManOfValor'
export * from './Sage'
export * from './Wanderer'
