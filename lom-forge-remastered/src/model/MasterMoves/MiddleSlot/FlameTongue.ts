import { GodOfDestruction } from 'model/Cards'
import { Sword } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const FlameTongue: MasterMove = {
  originalName: 'Flame Tongue',
  weapons: () => [Sword],
  effects: () => ['Salamander Damage', 'Flameburst'],
  cards: () => [GodOfDestruction]
}
