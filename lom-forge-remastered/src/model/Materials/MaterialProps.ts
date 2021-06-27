import { ArmorAttributes } from 'model/Armor'
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

export type MaterialCategory =
  | 'Metal'
  | 'Wood'
  | 'Stone'
  | 'Hide'
  | 'Scales'
  | 'Bone'
  | 'Fabric'
  | 'Aerolite'
  | undefined

export type MaterialProps = {
  name: string
  category: MaterialCategory
  growthControl: number
  weaponAttributes: WeaponAttributes
  armorAttributes: ArmorAttributes
  resistances: MaterialResistances
  priceCoefficient: number
}

export type Metal = MaterialProps & { category: 'Metal' }
export type Wood = MaterialProps & { category: 'Wood' }
export type Stone = MaterialProps & { category: 'Stone' }
export type Hide = MaterialProps & { category: 'Hide' }
export type Scales = MaterialProps & { category: 'Scales' }
export type Bone = MaterialProps & { category: 'Bone' }
export type Fabric = MaterialProps & { category: 'Fabric' }
export type Aerolite = MaterialProps & { category: 'Aerolite' }
export type Other = MaterialProps & { category: undefined }
