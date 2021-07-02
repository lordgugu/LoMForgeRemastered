import { CardProps } from 'model/Cards'
import { WeaponProps } from 'model/Equipment'

export type MasterMove = {
  originalName: string
  remasteredName?: string
  weapons: () => WeaponProps[]
  effects: () => string[]
  cards?: () => CardProps[]
  notes?: () => string[]
}

export * from './BottomSlot'
export * from './MiddleSlot'
export * from './TopSlot'
