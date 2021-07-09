import { MoonGoddess } from 'model/Cards'
import { Sword } from 'model/Equipment/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const Moonlight: MasterMove = {
  id: 'Moonlight',
  name: 'Moonlight',
  slot: 'bottom',
  effects: () => ['Aquatic Damage +', 'Sleep vs. Aquatic'],
  relatedWeapons: () => [Sword],
  relatedCards: () => [MoonGoddess]
}
