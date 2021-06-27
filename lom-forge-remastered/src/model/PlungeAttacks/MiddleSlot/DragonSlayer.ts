import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'
import { Axe } from 'model/Weapons'

export const DragonSlayer: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  name: 'Dragon Slayer',
  weapons: [Axe],
  effects: ['Double damage against dragons', 'May also inflict sleep on dragons'],
  cards: ['God of War']
}
