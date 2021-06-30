import { WeaponProps } from 'model/Weapons'

export type PlungeAttack = {
  originalName: string
  remasteredName?: string
  weapons: WeaponProps[]
  effects: string[]
  cards: string[]
}

export * from './BottomSlot'
export * from './MiddleSlot'
export * from './TopSlot'
