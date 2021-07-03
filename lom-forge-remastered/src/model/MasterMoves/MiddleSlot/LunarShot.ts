import { MoonGoddess } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const LunarShot: MasterMove = {
  originalName: 'Lunar Shot',
  weapons: () => [Bow],
  effects: () => ['Shade Damage'],
  cards: () => [MoonGoddess]
}
