import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'
import { Hammer } from 'model/Equipment'

export const Mjolnir: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Mjolnir',
  weapons: [Hammer],
  effects: ['Inflicts Sala/Jinn Damage', 'Attack Gauge +'],
  cards: ['Thunder God']
}
