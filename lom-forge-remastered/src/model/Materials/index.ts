import { ArmorAttributes } from 'model/Armors'
import { WeaponAttributes } from 'model/Weapons'

export type MaterialResistances = {
  wisp: number
  shade: number
  dryad: number
  aura: number
  sala: number
  gnome: number
  jinn: number
  undine: number
}

export type MaterialCategory = {
  originalName: 'Metal' | 'Wood' | 'Stone' | 'Hide' | 'Scales' | 'Bone' | 'Fabric' | 'Aerolite' | undefined
  remasteredName?: string
}

export type MaterialProps = {
  id: number
  originalName: string
  remasteredName?: string
  category: MaterialCategory
  growthControl: number
  weaponAttributes: WeaponAttributes
  armorAttributes: ArmorAttributes
  resistances: MaterialResistances
  priceCoefficient: number
}

export * from './Aerolite'
export * from './Bone'
export * from './Fabric'
export * from './Hide'
export * from './Metal'
export * from './None'
export * from './Scales'
export * from './Stone'
export * from './Wood'
