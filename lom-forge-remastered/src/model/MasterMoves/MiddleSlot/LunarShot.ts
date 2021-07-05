import { MoonGoddess } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const LunarShot: MasterMove = {
  id: 'LunarShot',
  name: 'Lunar Shot',
  effects: () => ['Shade Damage'],
  relatedWeapons: () => [Bow],
  relatedCards: () => [MoonGoddess]
}
