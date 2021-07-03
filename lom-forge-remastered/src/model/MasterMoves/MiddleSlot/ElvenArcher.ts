import { SpiritOfForest } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const ElvenArcher: MasterMove = {
  originalName: 'Elven Archer',
  weapons: () => [Bow],
  effects: () => ['Paralysis'],
  cards: () => [SpiritOfForest]
}
