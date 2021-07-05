import { Bow } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Shot: MasterMove = {
  id: 'Shot',
  name: 'Shot',
  effects: () => ['Default (Top Slot)'],
  relatedWeapons: () => [Bow]
}
