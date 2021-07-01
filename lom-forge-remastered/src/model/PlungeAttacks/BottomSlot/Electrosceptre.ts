import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'
import { Staff } from 'model/Equipment'

export const Electrosceptre: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Electrosceptre',
  weapons: [Staff],
  effects: ['Inflicts Sala/Jinn Damage'],
  cards: ['Ruler of Sky']
}
