import { SunGod } from 'model/Cards'
import { Sword } from 'model/Equipment/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const Sunlight: MasterMove = {
  id: 'Sunlight',
  name: 'Sunlight',
  slot: 'middle',
  effects: () => ['Undead Damage +', 'Flameburst vs. Undead'],
  relatedWeapons: () => [Sword],
  relatedCards: () => [SunGod]
}
