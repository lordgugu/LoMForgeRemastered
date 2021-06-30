import { TopSlotPlungeAttack } from 'model/PlungeAttacks'
import { Bow } from 'model/Weapons'

export const FlamingArrow: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Flaming Arrow',
  weapons: [Bow],
  effects: ['Exclusive to Sidewinder', 'Inflicts Sala Damage', 'May also inflict flameburst'],
  cards: []
}
