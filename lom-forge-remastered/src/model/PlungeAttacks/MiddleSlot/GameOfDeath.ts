import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'
import { Flail } from 'model/Equipment'

export const GameOfDeath: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Game of Death',
  weapons: [Flail],
  effects: ['Skill Up', 'Attack Gauge +'],
  cards: ['Mother of Gods']
}
