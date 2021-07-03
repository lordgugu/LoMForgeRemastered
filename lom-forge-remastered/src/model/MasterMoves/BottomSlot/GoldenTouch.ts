import { WingsOfDarkness } from 'model/Cards'
import { Staff } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const GoldenTouch: MasterMove = {
  originalName: 'Golden Touch',
  weapons: () => [Staff],
  effects: () => ['Experience &rarr; Lucre', 'Attack Gauge &minus;'],
  cards: () => [WingsOfDarkness]
}
