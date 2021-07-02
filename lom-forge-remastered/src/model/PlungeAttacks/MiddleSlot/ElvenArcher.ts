import { SpiritOfForest } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'

export const ElvenArcher: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Elven Archer',
  weapons: () => [Bow],
  effects: () => ['Paralysis'],
  cards: () => [SpiritOfForest]
}
