import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'
import { Knife } from 'model/Weapons'

export const QuickBlade: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  name: 'Quick Blade',
  weapons: [Knife],
  effects: ['Attack Gauge +'],
  cards: ['Clown']
}
