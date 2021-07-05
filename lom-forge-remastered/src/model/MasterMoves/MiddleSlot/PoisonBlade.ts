import { BeastHeadedGod } from 'model/Cards'
import { Knife } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const PoisonBlade: MasterMove = {
  id: 'PoisonBlade',
  name: 'Poison Blade',
  effects: () => ['Poison'],
  relatedWeapons: () => [Knife],
  relatedCards: () => [BeastHeadedGod]
}
