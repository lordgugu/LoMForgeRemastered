import { CardProps } from 'model/Cards'
import { ArmorProjectProps } from 'model/Projects'
import { SpecialAbility } from 'model/SpecialAbilities'

export type ArmorAttributes = {
  readonly strike: number
  readonly slash: number
  readonly pierce: number
  readonly magic: number
}

export type ArmorProps = {
  readonly originalName: string
  readonly remasteredName?: string
  readonly attributes: ArmorAttributes
  readonly markerThreshold: number
  readonly priceCoefficient: number
  readonly compatibleSpecials?: () => SpecialAbility[]
  readonly activate?: (project: ArmorProjectProps) => void
  readonly relatedCards?: () => CardProps[]
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
