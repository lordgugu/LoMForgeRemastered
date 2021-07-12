import { Card, CardCategory } from 'model/Cards'
import {
  BeastHeadedGod,
  FallenAngel,
  GodOfDestruction,
  Leviathan,
  LordOfFlies,
  WingsOfDarkness,
  WitchOfMoon
} from 'model/Cards/EvilGod'

export const EvilGod: CardCategory = 'Evil God'

export const AllEvilGodCards: Card[] = [
  BeastHeadedGod,
  FallenAngel,
  GodOfDestruction,
  Leviathan,
  LordOfFlies,
  WingsOfDarkness,
  WitchOfMoon
]

export const AllEvilGodCardsById: { [id in string]: Card } = Object.fromEntries(
  AllEvilGodCards.map((card) => [card.id, card])
)

export * from './BeastHeadedGod'
export * from './FallenAngel'
export * from './GodOfDestruction'
export * from './Leviathan'
export * from './LordOfFlies'
export * from './WingsOfDarkness'
export * from './WitchOfMoon'
