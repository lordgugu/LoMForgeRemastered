import { GodOfWar } from 'model/Cards'
import { Axe } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const DragonSlayer: MasterMove = {
  originalName: 'Dragon Slayer',
  weapons: () => [Axe],
  effects: () => ['Dragon Damage +', 'Sleep vs. Dragon'],
  cards: () => [GodOfWar]
}
