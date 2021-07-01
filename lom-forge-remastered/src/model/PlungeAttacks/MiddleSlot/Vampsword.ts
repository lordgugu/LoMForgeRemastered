import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'
import { Sword } from 'model/Equipment'

export const Vampsword: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Vampsword',
  weapons: [Sword],
  effects: ["Restores user's lost HP up to 25% of damage dealt"],
  cards: ['Witch of Moon']
}
