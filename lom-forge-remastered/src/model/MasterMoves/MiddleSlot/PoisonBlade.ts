import { BeastHeadedGod } from 'model/Cards'
import { Knife } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const PoisonBlade: MasterMove = {
  originalName: 'Poison Blade',
  weapons: () => [Knife],
  effects: () => ['Poison'],
  cards: () => [BeastHeadedGod]
}
