import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'
import { Bow } from 'model/Weapons'

export const LunarShot: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  name: 'Lunar Shot',
  weapons: [Bow],
  effects: ['Inflicts Shade Damage'],
  cards: ['Moon Goddess']
}
