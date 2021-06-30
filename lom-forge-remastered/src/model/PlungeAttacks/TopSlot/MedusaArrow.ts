import { TopSlotPlungeAttack } from 'model/PlungeAttacks'
import { Bow } from 'model/Weapons'

export const MedusaArrow: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Medusa Arrow',
  weapons: [Bow],
  effects: ['Exclusive to the Sacred Bow', 'May also inflict petrification'],
  cards: []
}
