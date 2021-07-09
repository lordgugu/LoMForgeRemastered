import { Bow } from 'model/Equipment/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const Icicle: MasterMove = {
  id: 'Icicle',
  name: 'Icicle',
  slot: 'top',
  effects: () => ['Undine Damage', 'Freeze'],
  notes: () => ['Waveruck Exclusive'],
  relatedWeapons: () => [Bow]
}
