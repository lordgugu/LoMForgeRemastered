import { SunGod } from 'model/Cards'
import { Sword } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Sunlight: MasterMove = {
  originalName: 'Sunlight',
  weapons: () => [Sword],
  effects: () => ['Undead Damage +', 'Flameburst vs. Undead'],
  cards: () => [SunGod]
}
