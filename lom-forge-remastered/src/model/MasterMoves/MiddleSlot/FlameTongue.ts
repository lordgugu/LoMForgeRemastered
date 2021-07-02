import { GodOfDestruction } from 'model/Cards'
import { Sword } from 'model/Equipment'
import { MiddleSlotMasterMove } from 'model/MasterMoves'

export const FlameTongue: MiddleSlotMasterMove = {
  slot: 'Middle',
  originalName: 'Flame Tongue',
  weapons: () => [Sword],
  effects: () => ['Salamander Damage', 'Flameburst'],
  cards: () => [GodOfDestruction]
}
