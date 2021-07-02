import { BeastHeadedGod } from 'model/Cards'
import { Knife } from 'model/Equipment'
import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'

export const PoisonBlade: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Poison Blade',
  weapons: () => [Knife],
  effects: () => ['Poison'],
  cards: () => [BeastHeadedGod]
}
