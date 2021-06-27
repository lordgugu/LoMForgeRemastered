import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'
import { Flail } from 'model/Weapons'

export const GameOfDeath: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  name: 'Game of Death',
  weapons: [Flail],
  effects: ['Skill Up', 'Attack Gauge +'],
  cards: ['Mother of Gods']
}
