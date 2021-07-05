import { MotherOfGods } from 'model/Cards'
import { Flail } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const RedDream: MasterMove = {
  id: 'RedDream',
  name: 'Red Dream',
  effects: () => ['Power Up', 'Attack Gauge +'],
  relatedWeapons: () => [Flail],
  relatedCards: () => [MotherOfGods]
}
