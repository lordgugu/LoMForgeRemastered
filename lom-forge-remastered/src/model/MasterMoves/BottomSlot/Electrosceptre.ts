import { RulerOfTheSky } from 'model/Cards'
import { Staff } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Electrosceptre: MasterMove = {
  originalName: 'Electrosceptre',
  weapons: () => [Staff],
  effects: () => ['Salamander Damage', 'Jinn Damage'],
  cards: () => [RulerOfTheSky]
}
