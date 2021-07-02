import { Bow } from 'model/Equipment'
import { MiddleSlotMasterMove } from 'model/MasterMoves'

export const DoubleShot: MiddleSlotMasterMove = {
  slot: 'Middle',
  originalName: 'Double Shot',
  weapons: () => [Bow],
  effects: () => ['Default (Middle Slot)']
}
