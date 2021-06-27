import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'
import { Hammer } from 'model/Weapons'

export const Mjolnir: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  name: 'Mjolnir',
  weapons: [Hammer],
  effects: ['Inflicts Sala/Jinn Damage', 'Attack Gauge +'],
  cards: ['Thunder God']
}
