import { MotherOfGods } from 'model/Cards'
import { Flail } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const GameOfDeath: MasterMove = {
  originalName: 'Game of Death',
  weapons: () => [Flail],
  effects: () => ['Skill Up', 'Attack Gauge +'],
  cards: () => [MotherOfGods]
}
