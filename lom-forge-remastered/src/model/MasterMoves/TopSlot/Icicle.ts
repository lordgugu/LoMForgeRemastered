import { Bow } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Icicle: MasterMove = {
  originalName: 'Icicle',
  weapons: () => [Bow],
  effects: () => ['Undine Damage', 'Freeze'],
  notes: () => ['Waveruck Exclusive']
}
