import { Bow } from 'model/Equipment'
import { TopSlotMasterMove } from 'model/MasterMoves'

export const Shot: TopSlotMasterMove = {
  slot: 'Top',
  originalName: 'Shot',
  weapons: () => [Bow],
  effects: () => ['Default (Top Slot)']
}
