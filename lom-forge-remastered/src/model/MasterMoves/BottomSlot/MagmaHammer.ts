import { Volcano } from 'model/Cards'
import { Hammer } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const MagmaHammer: MasterMove = {
  originalName: 'Magma Hammer',
  weapons: () => [Hammer],
  effects: () => ['Salamander Damage', 'Aura Damage', 'Defense Up'],
  cards: () => [Volcano]
}
