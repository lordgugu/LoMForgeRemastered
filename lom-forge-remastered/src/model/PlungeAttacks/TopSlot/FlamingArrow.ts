import { Bow } from 'model/Equipment'
import { TopSlotPlungeAttack } from 'model/PlungeAttacks'

export const FlamingArrow: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Flaming Arrow',
  weapons: () => [Bow],
  effects: () => ['Salamander Damage', 'Flameburst'],
  notes: () => ['Sidewinder Exclusive']
}
