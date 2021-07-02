import { Bow } from 'model/Equipment'
import { TopSlotMasterMove } from 'model/MasterMoves'

export const MedusaArrow: TopSlotMasterMove = {
  slot: 'Top',
  originalName: 'Medusa Arrow',
  weapons: () => [Bow],
  effects: () => ['Petrification'],
  notes: () => ['Sacred Bow Exclusive']
}
