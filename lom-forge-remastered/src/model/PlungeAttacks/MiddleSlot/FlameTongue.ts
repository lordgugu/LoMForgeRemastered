import { GodOfDestruction } from 'model/Cards'
import { Sword } from 'model/Equipment'
import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'

export const FlameTongue: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Flame Tongue',
  weapons: () => [Sword],
  effects: () => ['Salamander Damage', 'Flameburst'],
  cards: () => [GodOfDestruction]
}
