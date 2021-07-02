import { MoonGoddess } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { MiddleSlotMasterMove } from 'model/MasterMoves'

export const LunarShot: MiddleSlotMasterMove = {
  slot: 'Middle',
  originalName: 'Lunar Shot',
  weapons: () => [Bow],
  effects: () => ['Shade Damage'],
  cards: () => [MoonGoddess]
}
