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

export type WeaponContext = {
  attributes: { [attribute in WeaponAttribute]: number }
}

export type Weapon = Entity &
  WeaponContext &
  MasterMovesContext & {
    readonly markerThreshold: number
    readonly priceCoefficient: number
    readonly activate?: (project: WeaponProject) => void
  }

export const AllWeapons: Weapon[] = [
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

export const AllWeaponsByForgeCode: { [code: string]: Weapon } = {
  '1': Knife,
  '2': Sword,
  '3': Axe,
  '4': TwoHandedSword,
  '5': TwoHandedAxe,
  '6': Hammer,
  '7': Spear,
  '8': Staff,
  '9': Glove,
  '10': Flail,
  '11': Bow
}

export const AllWeaponsById: { [id: string]: Weapon } = Object.fromEntries(
  AllWeapons.map((weapon) => [weapon.id, weapon])
)

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
