import { WingsOfDarkness } from 'model/Cards'
import { Staff } from 'model/Equipment'
import { BottomSlotMasterMove } from 'model/MasterMoves'

export const GoldenTouch: BottomSlotMasterMove = {
  slot: 'Bottom',
  originalName: 'Golden Touch',
  weapons: () => [Staff],
  effects: () => ['Experience &rarr; Lucre', 'Attack Gauge &minus;'],
  cards: () => [WingsOfDarkness]
}
