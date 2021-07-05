import { SunGod } from 'model/Cards'
import { Sword } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Sunlight: MasterMove = {
  id: 'Sunlight',
  name: 'Sunlight',
  effects: () => ['Undead Damage +', 'Flameburst vs. Undead'],
  relatedWeapons: () => [Sword],
  relatedCards: () => [SunGod]
}
