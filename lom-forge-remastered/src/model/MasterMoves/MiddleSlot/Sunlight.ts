import { SunGod } from 'model/Cards/HeavenGod'
import { Sword } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const Sunlight: MasterMove = {
  id: 'Sunlight',
  name: 'Sunlight',
  slot: 'middle',
  effects: () => ['Undead Damage +', 'Flameburst vs. Undead'],
  relatedWeapons: () => [Sword],
  relatedCards: () => [SunGod]
}
