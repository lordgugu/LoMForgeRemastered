import { Entity } from 'model/Common'

export type MasterMove = Entity & {
  readonly effects: () => string[]
  readonly notes?: () => string[]
}

export * from './BottomSlot'
export * from './MiddleSlot'
export * from './TopSlot'
