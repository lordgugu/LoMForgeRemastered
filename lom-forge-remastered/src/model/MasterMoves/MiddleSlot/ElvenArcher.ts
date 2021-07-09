import { SpiritOfForest } from 'model/Cards'
import { Bow } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const ElvenArcher: MasterMove = {
  id: 'ElvenArcher',
  name: 'Elven Archer',
  slot: 'middle',
  effects: () => ['Paralysis'],
  relatedWeapons: () => [Bow],
  relatedCards: () => [SpiritOfForest]
}
