import { Bow } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const MedusaArrow: MasterMove = {
  id: 'MedusaArrow',
  name: 'Medusa Arrow',
  effects: () => ['Petrification'],
  notes: () => ['Sacred Bow Exclusive'],
  relatedWeapons: () => [Bow]
}
