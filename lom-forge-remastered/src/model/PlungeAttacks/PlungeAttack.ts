import { WeaponProps } from 'model/Weapons'

export type PlungeAttack = {
  slot: 'Top' | 'Middle' | 'Bottom'
  name: string
  weapons: WeaponProps[]
  effects: string[]
  cards: string[]
}

export type TopSlotPlungeAttack = PlungeAttack & { slot: 'Top' }
export type MiddleSlotPlungeAttack = PlungeAttack & { slot: 'Middle' }
export type BottomSlotPlungeAttack = PlungeAttack & { slot: 'Bottom' }
