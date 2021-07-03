import { Bow } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const DoubleShot: MasterMove = {
  originalName: 'Double Shot',
  weapons: () => [Bow],
  effects: () => ['Default (Middle Slot)']
}
