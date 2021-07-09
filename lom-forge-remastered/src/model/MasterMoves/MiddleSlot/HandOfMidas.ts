import { King } from 'model/Cards'
import { Glove } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const HandOfMidas: MasterMove = {
  id: 'HandOfMidas',
  name: 'Hand of Midas',
  slot: 'middle',
  effects: () => ['Experience &rarr; Lucre', 'Attack Gauge &minus;'],
  relatedWeapons: () => [Glove],
  relatedCards: () => [King]
}
