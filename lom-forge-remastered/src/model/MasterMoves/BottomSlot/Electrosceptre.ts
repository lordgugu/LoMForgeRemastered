import { RulerOfTheSky } from 'model/Cards'
import { Staff } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Electrosceptre: MasterMove = {
  id: 'Electrosceptre',
  name: 'Electrosceptre',
  slot: 'bottom',
  effects: () => ['Salamander Damage', 'Jinn Damage'],
  relatedWeapons: () => [Staff],
  relatedCards: () => [RulerOfTheSky]
}
