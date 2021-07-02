import { Volcano } from 'model/Cards'
import { Hammer } from 'model/Equipment'
import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'

export const MagmaHammer: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Magma Hammer',
  weapons: () => [Hammer],
  effects: () => ['Salamander Damage', 'Aura Damage', 'Defense Up'],
  cards: () => [Volcano]
}
