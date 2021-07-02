import { SpiritOfForest } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { MiddleSlotMasterMove } from 'model/MasterMoves'

export const ElvenArcher: MiddleSlotMasterMove = {
  slot: 'Middle',
  originalName: 'Elven Archer',
  weapons: () => [Bow],
  effects: () => ['Paralysis'],
  cards: () => [SpiritOfForest]
}
