import { Entity } from 'model/Common'
import { MasterMovesContext } from 'model/MasterMoves'
import { WeaponProject } from 'model/Projects'
import { Axe } from './Axe'
import { Bow } from './Bow'
import { Flail } from './Flail'
import { Glove } from './Glove'
import { Hammer } from './Hammer'
import { Knife } from './Knife'
import { Spear } from './Spear'
import { Staff } from './Staff'
import { Sword } from './Sword'
import { TwoHandedAxe } from './TwoHandedAxe'
import { TwoHandedSword } from './TwoHandedSword'

export type WeaponAttribute = 'sharp' | 'heavy' | 'force' | 'tech'
export const Sharp: WeaponAttribute = 'sharp'
export const Heavy: WeaponAttribute = 'heavy'
export const Force: WeaponAttribute = 'force'
export const Tech: WeaponAttribute = 'tech'

export type WeaponAttributes = {
  [attribute in WeaponAttribute]: number
}

export type WeaponEquipment = Entity &
  MasterMovesContext & {
    readonly attributes: WeaponAttributes
    readonly markerThreshold: number
    readonly priceCoefficient: number
    readonly activate?: (project: WeaponProject) => void
  }

export const AllWeapons: WeaponEquipment[] = [
  Knife,
  Sword,
  Axe,
  TwoHandedSword,
  TwoHandedAxe,
  Hammer,
  Spear,
  Staff,
  Glove,
  Flail,
  Bow
]

export * from './Axe'
export * from './Bow'
export * from './Flail'
export * from './Glove'
export * from './Hammer'
export * from './Knife'
export * from './Spear'
export * from './Staff'
export * from './Sword'
export * from './TwoHandedAxe'
export * from './TwoHandedSword'
