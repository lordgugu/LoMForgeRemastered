import { RulerOfTheSky } from 'model/Cards'
import { Staff } from 'model/Equipment'
import { BottomSlotMasterMove } from 'model/MasterMoves'

export const Electrosceptre: BottomSlotMasterMove = {
  slot: 'Bottom',
  originalName: 'Electrosceptre',
  weapons: () => [Staff],
  effects: () => ['Salamander Damage', 'Jinn Damage'],
  cards: () => [RulerOfTheSky]
}
