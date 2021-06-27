import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'
import { Staff } from 'model/Weapons'

export const Electrosceptre: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  name: 'Electrosceptre',
  weapons: [Staff],
  effects: ['Inflicts Sala/Jinn Damage'],
  cards: ['Ruler of Sky']
}
