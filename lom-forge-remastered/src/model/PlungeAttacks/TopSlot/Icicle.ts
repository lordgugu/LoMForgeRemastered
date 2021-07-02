import { Bow } from 'model/Equipment'
import { TopSlotPlungeAttack } from 'model/PlungeAttacks'

export const Icicle: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Icicle',
  weapons: () => [Bow],
  effects: () => ['Undine Damage', 'Freeze'],
  notes: () => ['Waveruck Exclusive']
}
