import { Card, CardCategory } from 'model/Cards'
import {
  BlacksmithGod,
  FertilityGoddess,
  GoddessOfLove,
  GodOfWar,
  MoonGoddess,
  MotherOfGods,
  OceanGod,
  RulerOfTheSky,
  SunGod,
  ThunderGod,
  WindGod,
  WisdomGoddess
} from 'model/Cards/HeavenGod'

export const HeavenGod: CardCategory = 'Heaven God'

export const AllHeavenGodCards: Card[] = [
  BlacksmithGod,
  FertilityGoddess,
  GoddessOfLove,
  GodOfWar,
  MoonGoddess,
  MotherOfGods,
  OceanGod,
  RulerOfTheSky,
  SunGod,
  ThunderGod,
  WindGod,
  WisdomGoddess
]

export const AllHeavenGodCardsById: { [id in string]: Card } = Object.fromEntries(
  AllHeavenGodCards.map((card) => [card.id, card])
)

export * from './BlacksmithGod'
export * from './FertilityGoddess'
export * from './GoddessOfLove'
export * from './GodOfWar'
export * from './MoonGoddess'
export * from './MotherOfGods'
export * from './OceanGod'
export * from './RulerOfTheSky'
export * from './SunGod'
export * from './ThunderGod'
export * from './WindGod'
export * from './WisdomGoddess'
