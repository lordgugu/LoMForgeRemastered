import { MoonGoddess } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'

export const LunarShot: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Lunar Shot',
  weapons: () => [Bow],
  effects: () => ['Shade Damage'],
  cards: () => [MoonGoddess]
}
