import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'
import { Sword } from 'model/Equipment'

export const FlameTongue: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Flame Tongue',
  weapons: [Sword],
  effects: ['Inflicts Sala Damage', 'May also inflict flameburst'],
  cards: ['God of Destruction']
}
