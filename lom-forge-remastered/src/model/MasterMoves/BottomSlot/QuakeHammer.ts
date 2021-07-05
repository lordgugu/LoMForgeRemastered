import { SpiritOfMountain } from 'model/Cards'
import { Hammer } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const QuakeHammer: MasterMove = {
  id: 'QuakeHammer',
  name: 'Quake Hammer',
  effects: () => ['Aura Damage', 'Gnome Damage', 'Defense Up'],
  relatedWeapons: () => [Hammer],
  relatedCards: () => [SpiritOfMountain]
}
