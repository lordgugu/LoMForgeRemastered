import { BottomSlotPlungeAttack, MiddleSlotPlungeAttack, TopSlotPlungeAttack } from 'model/PlungeAttacks'

export type WeaponAttributes = {
  sharpness: number
  weight: number
  force: number
  technique: number
}

export type WeaponName =
  | 'Axe'
  | 'Bow'
  | 'Flail'
  | 'Glove'
  | 'Hammer'
  | 'Knife'
  | 'Spear'
  | 'Staff'
  | 'Sword'
  | '2H Axe'
  | '2H Sword'

export type WeaponProps = {
  name: WeaponName
  attributes: WeaponAttributes
  markerThreshold: number
  priceCoefficient: number
  plungeAttacks: {
    top: TopSlotPlungeAttack
    middle: MiddleSlotPlungeAttack
    bottom: BottomSlotPlungeAttack
  }
}

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
