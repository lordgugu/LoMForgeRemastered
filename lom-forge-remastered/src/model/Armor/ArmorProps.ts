import { SpecialAbility } from 'model/SpecialAbilities'

export type ArmorAttributes = {
  strike: number
  slash: number
  pierce: number
  magic: number
}

export type ArmorName =
  | 'Armor'
  | 'Boots'
  | 'Gauntlet'
  | 'Hat'
  | 'Hauberk'
  | 'Helm'
  | 'Mantle'
  | 'Pendant'
  | 'Ring'
  | 'Robe'
  | 'Shield'
  | 'Shoes'

export type ArmorProps = {
  name: ArmorName
  attributes: ArmorAttributes
  markerThreshold: number
  priceCoefficient: number
  special?: SpecialAbility
}
