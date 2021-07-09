import { GodOfDestruction } from 'model/Cards'
import { Sword } from 'model/Equipment/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const FlameTongue: MasterMove = {
  id: 'FlameTongue',
  name: 'Flame Tongue',
  slot: 'middle',
  effects: () => ['Salamander Damage', 'Flameburst'],
  relatedWeapons: () => [Sword],
  relatedCards: () => [GodOfDestruction]
}
