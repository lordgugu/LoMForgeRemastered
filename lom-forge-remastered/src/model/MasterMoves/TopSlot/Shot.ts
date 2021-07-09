import { Bow } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const Shot: MasterMove = {
  id: 'Shot',
  name: 'Shot',
  slot: 'top',
  effects: () => ['Default (Top Slot)'],
  relatedWeapons: () => [Bow]
}
