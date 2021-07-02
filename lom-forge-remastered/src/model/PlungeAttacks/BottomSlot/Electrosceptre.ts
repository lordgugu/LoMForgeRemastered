import { RulerOfTheSky } from 'model/Cards'
import { Staff } from 'model/Equipment'
import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'

export const Electrosceptre: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Electrosceptre',
  weapons: () => [Staff],
  effects: () => ['Salamander Damage', 'Jinn Damage'],
  cards: () => [RulerOfTheSky]
}
