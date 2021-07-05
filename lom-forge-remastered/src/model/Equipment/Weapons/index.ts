import { Entity } from 'model/Common'
import { MasterMove } from 'model/MasterMoves'
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

export type WeaponAttributes = {
  sharpness: number
  weight: number
  force: number
  technique: number
}

export type MasterMoveSlot = 'top' | 'middle' | 'bottom'

export type WeaponEquipment = Entity & {
  readonly attributes: WeaponAttributes
  readonly markerThreshold: number
  readonly priceCoefficient: number
  readonly masterMoves: { readonly [key in MasterMoveSlot]: MasterMove }
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
