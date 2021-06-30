import { TopSlotPlungeAttack } from 'model/PlungeAttacks'
import { Bow } from 'model/Weapons'

export const Icicle: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Icicle',
  weapons: [Bow],
  effects: ['Exclusive to the Waveruck', 'Inflicts Undine Damage', 'May also inflict freeze'],
  cards: []
}
