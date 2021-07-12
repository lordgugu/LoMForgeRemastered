import { Card, CardCategory } from 'model/Cards'
import { SpiritOfForest, SpiritOfHousework, SpiritOfMountain, SpiritOfOcean, SpiritOfShoes } from 'model/Cards/Spirit'

export const Spirit: CardCategory = 'Spirit'

export const AllSpiritCards: Card[] = [
  SpiritOfForest,
  SpiritOfHousework,
  SpiritOfMountain,
  SpiritOfOcean,
  SpiritOfShoes
]

export const AllSpiritCardsById: { [id in string]: Card } = Object.fromEntries(
  AllSpiritCards.map((card) => [card.id, card])
)

export * from './SpiritOfForest'
export * from './SpiritOfHousework'
export * from './SpiritOfMountain'
export * from './SpiritOfOcean'
export * from './SpiritOfShoes'
