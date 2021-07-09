import { GodOfWar } from 'model/Cards'
import { Axe } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const DragonSlayer: MasterMove = {
  id: 'DragonSlayer',
  name: 'Dragon Slayer',
  slot: 'middle',
  effects: () => ['Dragon Damage +', 'Sleep vs. Dragon'],
  relatedWeapons: () => [Axe],
  relatedCards: () => [GodOfWar]
}
