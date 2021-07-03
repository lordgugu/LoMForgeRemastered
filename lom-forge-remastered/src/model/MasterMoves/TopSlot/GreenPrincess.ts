import { MotherOfGods } from 'model/Cards'
import { Flail } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const GreenPrincess: MasterMove = {
  originalName: 'Green Princess',
  weapons: () => [Flail],
  effects: () => ['Defense Up', 'Attack Gauge +'],
  cards: () => [MotherOfGods]
}
