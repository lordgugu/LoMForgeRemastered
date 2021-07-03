import { Bow } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const FlamingArrow: MasterMove = {
  originalName: 'Flaming Arrow',
  weapons: () => [Bow],
  effects: () => ['Salamander Damage', 'Flameburst'],
  notes: () => ['Sidewinder Exclusive']
}
