import { Entity } from 'model/Common'
import {
  Armor,
  Boots,
  Gauntlet,
  Hat,
  Hauberk,
  Helm,
  Mantle,
  Pendant,
  Ring,
  Robe,
  Shield,
  Shoes
} from 'model/Gear/Equipment'
import { AlteredArmor } from 'model/Projects'

export type EquipmentAttribute = 'strike' | 'slash' | 'pierce' | 'magic'

export const Strike: EquipmentAttribute = 'strike'
export const Slash: EquipmentAttribute = 'slash'
export const Pierce: EquipmentAttribute = 'pierce'
export const Magic: EquipmentAttribute = 'magic'

export type EquipmentAttributes = { [attribute in EquipmentAttribute]: number }

export type Equipment = Entity & {
  readonly attributes: EquipmentAttributes
  readonly markerThreshold: number
  readonly priceCoefficient: number
  readonly activate?: (project: AlteredArmor) => void
}

export type ActiveEquipment = Equipment & {
  readonly activate: (project: AlteredArmor) => void
}

export const AllEquipment: Equipment[] = [
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

export const AllEquipmentByForgeCode: { [code: string]: Equipment } = {
  '12': Shield,
  '13': Helm,
  '14': Hat,
  '15': Hauberk,
  '16': Robe,
  '17': Gauntlet,
  '18': Ring,
  '19': Boots,
  '20': Shoes,
  '21': Armor,
  '22': Mantle,
  '23': Pendant
}

export const AllEquipmentById: { [id: string]: Equipment } = Object.fromEntries(
  AllEquipment.map((equipment) => [equipment.id, equipment])
)

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
