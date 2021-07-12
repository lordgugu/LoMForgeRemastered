import { Card, CardCategory } from 'model/Cards'
import {
  PixieOfEnvy,
  PixieOfGluttony,
  PixieOfGreed,
  PixieOfLust,
  PixieOfPride,
  PixieOfSloth,
  PixieOfWrath
} from 'model/Cards/Pixie'

export const Pixie: CardCategory = 'Pixie'

export const AllPixieCards: Card[] = [
  PixieOfEnvy,
  PixieOfGluttony,
  PixieOfGreed,
  PixieOfLust,
  PixieOfPride,
  PixieOfSloth,
  PixieOfWrath
]

export const AllPixieCardsById: { [id in string]: Card } = Object.fromEntries(
  AllPixieCards.map((card) => [card.id, card])
)

export * from './PixieOfEnvy'
export * from './PixieOfGluttony'
export * from './PixieOfGreed'
export * from './PixieOfLust'
export * from './PixieOfPride'
export * from './PixieOfSloth'
export * from './PixieOfWrath'
