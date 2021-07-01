import { SpecialAbility } from 'model/SpecialAbilities'

export type ArmorAttributes = {
  strike: number
  slash: number
  pierce: number
  magic: number
}

export type ArmorProps = {
  originalName: string
  remasteredName?: string
  attributes: ArmorAttributes
  markerThreshold: number
  priceCoefficient: number
  special?: SpecialAbility
}

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
