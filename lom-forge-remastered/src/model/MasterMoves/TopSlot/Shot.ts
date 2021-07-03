import { Bow } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Shot: MasterMove = {
  originalName: 'Shot',
  weapons: () => [Bow],
  effects: () => ['Default (Top Slot)']
}
