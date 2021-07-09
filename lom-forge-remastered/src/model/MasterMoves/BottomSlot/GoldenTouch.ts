import { WingsOfDarkness } from 'model/Cards'
import { Staff } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const GoldenTouch: MasterMove = {
  id: 'GoldenTouch',
  name: 'Golden Touch',
  slot: 'bottom',
  effects: () => ['Experience &rarr; Lucre', 'Attack Gauge &minus;'],
  relatedWeapons: () => [Staff],
  relatedCards: () => [WingsOfDarkness]
}
