import { CardProps } from 'model/Cards'
import { MasterMove } from 'model/MasterMoves'
import { WeaponProjectProps } from 'model/Projects'

export type WeaponAttributes = {
  readonly sharpness: number
  readonly weight: number
  readonly force: number
  readonly technique: number
}

export type MasterMoveSlot = 'top' | 'middle' | 'bottom'

export type WeaponProps = {
  readonly originalName: string
  readonly remasteredName?: string
  readonly attributes: WeaponAttributes
  readonly markerThreshold: number
  readonly priceCoefficient: number
  readonly masterMoves: { readonly [key in MasterMoveSlot]: MasterMove }
  readonly compatibleMasterMoves: { readonly [key in MasterMoveSlot]: () => MasterMove[] }
  readonly activate?: (project: WeaponProjectProps) => void
  readonly relatedCards: () => CardProps[]
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
