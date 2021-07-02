import { Bow } from 'model/Equipment'
import { TopSlotMasterMove } from 'model/MasterMoves'

export const Icicle: TopSlotMasterMove = {
  slot: 'Top',
  originalName: 'Icicle',
  weapons: () => [Bow],
  effects: () => ['Undine Damage', 'Freeze'],
  notes: () => ['Waveruck Exclusive']
}
