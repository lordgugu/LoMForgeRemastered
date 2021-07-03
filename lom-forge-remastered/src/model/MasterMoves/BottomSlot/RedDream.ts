import { MotherOfGods } from 'model/Cards'
import { Flail } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const RedDream: MasterMove = {
  originalName: 'Red Dream',
  weapons: () => [Flail],
  effects: () => ['Power Up', 'Attack Gauge +'],
  cards: () => [MotherOfGods]
}
