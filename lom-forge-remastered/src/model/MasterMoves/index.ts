import { CardProps } from 'model/Cards'
import { WeaponProps } from 'model/Equipment'

export type MasterMove = {
  readonly originalName: string
  readonly remasteredName?: string
  readonly weapons: () => WeaponProps[]
  readonly effects: () => string[]
  readonly cards?: () => CardProps[]
  readonly notes?: () => string[]
}

export * from './BottomSlot'
export * from './MiddleSlot'
export * from './TopSlot'
