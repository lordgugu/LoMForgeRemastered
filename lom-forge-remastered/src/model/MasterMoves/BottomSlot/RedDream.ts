import { MotherOfGods } from 'model/Cards'
import { Flail } from 'model/Equipment'
import { BottomSlotMasterMove } from 'model/MasterMoves'

export const RedDream: BottomSlotMasterMove = {
  slot: 'Bottom',
  originalName: 'Red Dream',
  weapons: () => [Flail],
  effects: () => ['Power Up', 'Attack Gauge +'],
  cards: () => [MotherOfGods]
}
