import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'
import { Sword } from 'model/Weapons'

export const Sunlight: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Sunlight',
  weapons: [Sword],
  effects: ['Double damage against undead', 'May also inflict flameburst on undead'],
  cards: ['Sun God']
}
