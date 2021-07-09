import { Bow } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const DoubleShot: MasterMove = {
  id: 'DoubleShot',
  name: 'Double Shot',
  slot: 'middle',
  effects: () => ['Default (Middle Slot)'],
  relatedWeapons: () => [Bow]
}
