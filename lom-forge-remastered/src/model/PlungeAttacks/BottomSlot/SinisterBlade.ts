import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'
import { Knife } from 'model/Weapons'

export const SinisterBlade: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Sinister Blade',
  weapons: [Knife],
  effects: ['Double damage against demi-humans'],
  cards: ['Lord of Flies']
}
