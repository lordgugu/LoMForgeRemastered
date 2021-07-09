import { Bow } from 'model/Equipment/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const MedusaArrow: MasterMove = {
  id: 'MedusaArrow',
  name: 'Medusa Arrow',
  slot: 'top',
  effects: () => ['Petrification'],
  notes: () => ['Sacred Bow Exclusive'],
  relatedWeapons: () => [Bow]
}
