import { GodOfWar } from 'model/Cards'
import { Axe } from 'model/Equipment'
import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'

export const DragonSlayer: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Dragon Slayer',
  weapons: () => [Axe],
  effects: () => ['Dragon Damage +', 'Sleep vs. Dragon'],
  cards: () => [GodOfWar]
}
