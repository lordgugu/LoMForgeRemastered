import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'
import { Sword } from 'model/Weapons'

export const FlameTongue: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  name: 'Flame Tongue',
  weapons: [Sword],
  effects: ['Inflicts Sala Damage', 'May also inflict flameburst'],
  cards: ['God of Destruction']
}
