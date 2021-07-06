import { Entity } from 'model/Common'

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
}

export type CardSlot = 'pending' | 'hidden' | 'top' | 'middle' | 'bottom' | 'leaving'

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
