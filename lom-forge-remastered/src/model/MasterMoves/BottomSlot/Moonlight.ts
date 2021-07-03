import { MoonGoddess } from 'model/Cards'
import { Sword } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Moonlight: MasterMove = {
  originalName: 'Moonlight',
  weapons: () => [Sword],
  effects: () => ['Aquatic Damage +', 'Sleep vs. Aquatic'],
  cards: () => [MoonGoddess]
}
