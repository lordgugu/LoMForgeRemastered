import { GodOfWar } from 'model/Cards'
import { Axe } from 'model/Equipment'
import { MiddleSlotMasterMove } from 'model/MasterMoves'

export const DragonSlayer: MiddleSlotMasterMove = {
  slot: 'Middle',
  originalName: 'Dragon Slayer',
  weapons: () => [Axe],
  effects: () => ['Dragon Damage +', 'Sleep vs. Dragon'],
  cards: () => [GodOfWar]
}
