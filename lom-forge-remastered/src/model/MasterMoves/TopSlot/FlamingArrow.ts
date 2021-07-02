import { Bow } from 'model/Equipment'
import { TopSlotMasterMove } from 'model/MasterMoves'

export const FlamingArrow: TopSlotMasterMove = {
  slot: 'Top',
  originalName: 'Flaming Arrow',
  weapons: () => [Bow],
  effects: () => ['Salamander Damage', 'Flameburst'],
  notes: () => ['Sidewinder Exclusive']
}
