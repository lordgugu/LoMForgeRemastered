import { Volcano } from 'model/Cards'
import { Hammer } from 'model/Equipment'
import { BottomSlotMasterMove } from 'model/MasterMoves'

export const MagmaHammer: BottomSlotMasterMove = {
  slot: 'Bottom',
  originalName: 'Magma Hammer',
  weapons: () => [Hammer],
  effects: () => ['Salamander Damage', 'Aura Damage', 'Defense Up'],
  cards: () => [Volcano]
}
