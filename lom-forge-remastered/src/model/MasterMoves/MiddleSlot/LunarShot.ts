import { MoonGoddess } from 'model/Cards/HeavenGod'
import { Bow } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const LunarShot: MasterMove = {
  id: 'LunarShot',
  name: 'Lunar Shot',
  slot: 'middle',
  effects: () => ['Shade Damage'],
  relatedWeapons: () => [Bow],
  relatedCards: () => [MoonGoddess]
}
