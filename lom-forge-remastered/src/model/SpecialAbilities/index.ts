import { ArmorProps } from 'model/Equipment'

export type SpecialAbility = {
  originalName: string
  remasteredName?: string
  requirements: { armors: ArmorProps[]; cards: string[] }[]
  effect: string[]
  notes: string[]
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
