import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'
import { Bow } from 'model/Weapons'

export const ElvenArcher: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Elven Archer',
  weapons: [Bow],
  effects: ['May also inflict paralysis'],
  cards: ['Spirit (Forest)']
}
