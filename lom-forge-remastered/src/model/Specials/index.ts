import { Entity } from 'model/Common'

export type Special = Entity & {
  readonly effect: string[]
  readonly notes?: string[]
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
