import { MotherOfGods } from 'model/Cards'
import { Flail } from 'model/Equipment/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const GameOfDeath: MasterMove = {
  id: 'GameOfDeath',
  name: 'Game of Death',
  slot: 'middle',
  effects: () => ['Skill Up', 'Attack Gauge +'],
  relatedWeapons: () => [Flail],
  relatedCards: () => [MotherOfGods]
}
