import { MotherOfGods } from 'model/Cards'
import { Flail } from 'model/Equipment'
import { TopSlotMasterMove } from 'model/MasterMoves'

export const GreenPrincess: TopSlotMasterMove = {
  slot: 'Top',
  originalName: 'Green Princess',
  weapons: () => [Flail],
  effects: () => ['Defense Up', 'Attack Gauge +'],
  cards: () => [MotherOfGods]
}
