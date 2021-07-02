import { MotherOfGods } from 'model/Cards'
import { Flail } from 'model/Equipment'
import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'

export const GameOfDeath: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Game of Death',
  weapons: () => [Flail],
  effects: () => ['Skill Up', 'Attack Gauge +'],
  cards: () => [MotherOfGods]
}
