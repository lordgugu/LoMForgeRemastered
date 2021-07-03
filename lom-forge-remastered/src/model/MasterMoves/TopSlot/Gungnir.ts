import { RulerOfTheSky } from 'model/Cards'
import { Spear } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Gungnir: MasterMove = {
  originalName: 'Gungnir',
  weapons: () => [Spear],
  effects: () => ['Spirit Up', 'Attack Gauge +'],
  cards: () => [RulerOfTheSky]
}
