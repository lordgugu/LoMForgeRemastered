import { MotherOfGods } from 'model/Cards'
import { Flail } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const GreenPrincess: MasterMove = {
  id: 'GreenPrincess',
  name: 'Green Princess',
  effects: () => ['Defense Up', 'Attack Gauge +'],
  relatedWeapons: () => [Flail],
  relatedCards: () => [MotherOfGods]
}
