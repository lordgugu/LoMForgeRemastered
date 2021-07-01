import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'
import { Knife } from 'model/Equipment'

export const PoisonBlade: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Poison Blade',
  weapons: [Knife],
  effects: ['May inflict poison'],
  cards: ['Beast-Headed God']
}
