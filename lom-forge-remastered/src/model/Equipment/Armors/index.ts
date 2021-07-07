import { Entity } from 'model/Common'
import { ArmorProject } from 'model/Projects'
import { Armor } from './Armor'
import { Boots } from './Boots'
import { Gauntlet } from './Gauntlet'
import { Hat } from './Hat'
import { Hauberk } from './Hauberk'
import { Helm } from './Helm'
import { Mantle } from './Mantle'
import { Pendant } from './Pendant'
import { Ring } from './Ring'
import { Robe } from './Robe'
import { Shield } from './Shield'
import { Shoes } from './Shoes'

export type ArmorAttribute = 'strike' | 'slash' | 'pierce' | 'magic'
export const Strike: ArmorAttribute = 'strike'
export const Slash: ArmorAttribute = 'slash'
export const Pierce: ArmorAttribute = 'pierce'
export const Magic: ArmorAttribute = 'magic'

export type ArmorAttributes = {
  [attribute in ArmorAttribute]: number
}

export type ArmorEquipment = Entity & {
  readonly attributes: ArmorAttributes
  readonly markerThreshold: number
  readonly priceCoefficient: number
  readonly activate?: (project: ArmorProject) => void
}

export const AllArmors: ArmorEquipment[] = [
  Shield,
  Helm,
  Hat,
  Hauberk,
  Robe,
  Gauntlet,
  Ring,
  Boots,
  Shoes,
  Armor,
  Mantle,
  Pendant
]

export * from './Armor'
export * from './Boots'
export * from './Gauntlet'
export * from './Hat'
export * from './Hauberk'
export * from './Helm'
export * from './Mantle'
export * from './Pendant'
export * from './Ring'
export * from './Robe'
export * from './Shield'
export * from './Shoes'
