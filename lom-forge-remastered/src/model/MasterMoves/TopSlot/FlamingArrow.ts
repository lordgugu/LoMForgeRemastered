import { Bow } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const FlamingArrow: MasterMove = {
  id: 'FlamingArrow',
  name: 'Flaming Arrow',
  effects: () => ['Salamander Damage', 'Flameburst'],
  notes: () => ['Sidewinder Exclusive'],
  relatedWeapons: () => [Bow]
}
