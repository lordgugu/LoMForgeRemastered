import { ArmorProps } from 'model/Armors'

export type SpecialAbility = {
  name: string
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
