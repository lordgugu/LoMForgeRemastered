import { Bow } from 'model/Equipment'
import { TopSlotPlungeAttack } from 'model/PlungeAttacks'

export const MedusaArrow: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Medusa Arrow',
  weapons: () => [Bow],
  effects: () => ['Petrification'],
  notes: () => ['Sacred Bow Exclusive']
}
