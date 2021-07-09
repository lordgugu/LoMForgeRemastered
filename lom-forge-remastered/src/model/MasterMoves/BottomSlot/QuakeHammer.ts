import { SpiritOfMountain } from 'model/Cards'
import { Hammer } from 'model/Equipment/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const QuakeHammer: MasterMove = {
  id: 'QuakeHammer',
  name: 'Quake Hammer',
  slot: 'bottom',
  effects: () => ['Aura Damage', 'Gnome Damage', 'Defense Up'],
  relatedWeapons: () => [Hammer],
  relatedCards: () => [SpiritOfMountain]
}
