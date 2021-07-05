import { Volcano } from 'model/Cards'
import { Hammer } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const MagmaHammer: MasterMove = {
  id: 'MagmaHammer',
  name: 'Magma Hammer',
  effects: () => ['Salamander Damage', 'Aura Damage', 'Defense Up'],
  relatedWeapons: () => [Hammer],
  relatedCards: () => [Volcano]
}
