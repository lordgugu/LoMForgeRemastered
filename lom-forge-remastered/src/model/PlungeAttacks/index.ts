import { WeaponProps } from 'model/Weapons'

export type PlungeAttack = {
  name: string
  weapons: WeaponProps[]
  effects: string[]
  cards: string[]
}

export * from './BottomSlot'
export * from './MiddleSlot'
export * from './TopSlot'
