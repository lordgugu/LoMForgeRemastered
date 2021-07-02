import { BeastHeadedGod } from 'model/Cards'
import { Knife } from 'model/Equipment'
import { MiddleSlotMasterMove } from 'model/MasterMoves'

export const PoisonBlade: MiddleSlotMasterMove = {
  slot: 'Middle',
  originalName: 'Poison Blade',
  weapons: () => [Knife],
  effects: () => ['Poison'],
  cards: () => [BeastHeadedGod]
}
