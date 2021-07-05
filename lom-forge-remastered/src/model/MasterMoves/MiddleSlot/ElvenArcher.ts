import { SpiritOfForest } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const ElvenArcher: MasterMove = {
  id: 'ElvenArcher',
  name: 'Elven Archer',
  effects: () => ['Paralysis'],
  relatedWeapons: () => [Bow],
  relatedCards: () => [SpiritOfForest]
}
