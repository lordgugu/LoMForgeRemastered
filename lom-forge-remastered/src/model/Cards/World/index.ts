import { Card, CardCategory } from 'model/Cards'
import { AncientMoon, DyingEarth, HeavensScale, MirroredWorld, Ragnarok, Yggdrasil } from 'model/Cards/World'

export const World: CardCategory = 'World'

export const AllWorldCards: Card[] = [AncientMoon, DyingEarth, HeavensScale, MirroredWorld, Ragnarok, Yggdrasil]

export const AllWorldCardsById: { [id in string]: Card } = Object.fromEntries(
  AllWorldCards.map((card) => [card.id, card])
)

export * from './AncientMoon'
export * from './DyingEarth'
export * from './HeavensScale'
export * from './MirroredWorld'
export * from './Ragnarok'
export * from './Yggdrasil'
