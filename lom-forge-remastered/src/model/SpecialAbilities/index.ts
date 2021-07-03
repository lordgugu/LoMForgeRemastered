import { ArmorProps } from 'model/Equipment'

export type SpecialAbility = {
  readonly originalName: string
  readonly remasteredName?: string
  readonly requirements: { readonly armors: ArmorProps[]; readonly cards: string[] }[]
  readonly effect: string[]
  readonly notes: string[]
}

export * from './AutoRevive'
export * from './ExtraExperience'
export * from './ExtraLucre'
export * from './FastRevive'
export * from './MoveHpRegeneration'
export * from './NoHpRegeneration'
export * from './NoRevive'
export * from './ShareExperience'
export * from './StareImmunity'
