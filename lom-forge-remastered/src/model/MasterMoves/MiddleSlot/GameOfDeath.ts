import { MotherOfGods } from 'model/Cards'
import { Flail } from 'model/Equipment'
import { MiddleSlotMasterMove } from 'model/MasterMoves'

export const GameOfDeath: MiddleSlotMasterMove = {
  slot: 'Middle',
  originalName: 'Game of Death',
  weapons: () => [Flail],
  effects: () => ['Skill Up', 'Attack Gauge +'],
  cards: () => [MotherOfGods]
}
