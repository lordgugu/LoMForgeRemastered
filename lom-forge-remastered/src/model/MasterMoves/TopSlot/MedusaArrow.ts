import { Bow } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const MedusaArrow: MasterMove = {
  originalName: 'Medusa Arrow',
  weapons: () => [Bow],
  effects: () => ['Petrification'],
  notes: () => ['Sacred Bow Exclusive']
}
