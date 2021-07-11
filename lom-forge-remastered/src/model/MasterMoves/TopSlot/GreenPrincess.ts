import { MotherOfGods } from 'model/Cards/HeavenGod'
import { Flail } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const GreenPrincess: MasterMove = {
  id: 'GreenPrincess',
  name: 'Green Princess',
  slot: 'top',
  effects: () => ['Defense Up', 'Attack Gauge +'],
  relatedWeapons: () => [Flail],
  relatedCards: () => [MotherOfGods]
}
