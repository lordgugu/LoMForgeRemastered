import { MoonGoddess } from 'model/Cards'
import { Sword } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Moonlight: MasterMove = {
  id: 'Moonlight',
  name: 'Moonlight',
  effects: () => ['Aquatic Damage +', 'Sleep vs. Aquatic'],
  relatedWeapons: () => [Sword],
  relatedCards: () => [MoonGoddess]
}
