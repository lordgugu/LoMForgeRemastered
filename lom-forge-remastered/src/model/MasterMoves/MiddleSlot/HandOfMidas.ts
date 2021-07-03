import { King } from 'model/Cards'
import { Glove } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const HandOfMidas: MasterMove = {
  originalName: 'Hand of Midas',
  weapons: () => [Glove],
  effects: () => ['Experience &rarr; Lucre', 'Attack Gauge &minus;'],
  cards: () => [King]
}
