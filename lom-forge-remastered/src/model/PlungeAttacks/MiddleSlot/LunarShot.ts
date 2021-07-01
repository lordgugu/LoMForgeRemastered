import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'
import { Bow } from 'model/Equipment'

export const LunarShot: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Lunar Shot',
  weapons: [Bow],
  effects: ['Inflicts Shade Damage'],
  cards: ['Moon Goddess']
}
