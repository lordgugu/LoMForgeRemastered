import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'
import { Bow } from 'model/Weapons'

export const DoubleShot: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Double Shot',
  weapons: [Bow],
  effects: ['Default plunge attack for the middle slot'],
  cards: []
}
