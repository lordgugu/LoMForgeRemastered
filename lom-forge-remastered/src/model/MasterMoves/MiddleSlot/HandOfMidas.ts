import { King } from 'model/Cards'
import { Glove } from 'model/Equipment'
import { MiddleSlotMasterMove } from 'model/MasterMoves'

export const HandOfMidas: MiddleSlotMasterMove = {
  slot: 'Middle',
  originalName: 'Hand of Midas',
  weapons: () => [Glove],
  effects: () => ['Experience &rarr; Lucre', 'Attack Gauge &minus;'],
  cards: () => [King]
}
