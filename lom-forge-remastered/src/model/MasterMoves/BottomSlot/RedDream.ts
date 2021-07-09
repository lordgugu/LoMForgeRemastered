import { MotherOfGods } from 'model/Cards'
import { Flail } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const RedDream: MasterMove = {
  id: 'RedDream',
  name: 'Red Dream',
  slot: 'bottom',
  effects: () => ['Power Up', 'Attack Gauge +'],
  relatedWeapons: () => [Flail],
  relatedCards: () => [MotherOfGods]
}
