import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'
import { Hammer } from 'model/Weapons'

export const MagmaHammer: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Magma Hammer',
  weapons: [Hammer],
  effects: ['Inflicts Sala/Aura Damage', 'Defense Up'],
  cards: ['Volcano']
}
