import { BeastHeadedGod } from 'model/Cards'
import { Knife } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const PoisonBlade: MasterMove = {
  id: 'PoisonBlade',
  name: 'Poison Blade',
  slot: 'middle',
  effects: () => ['Poison'],
  relatedWeapons: () => [Knife],
  relatedCards: () => [BeastHeadedGod]
}
