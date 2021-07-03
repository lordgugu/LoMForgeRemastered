import { SpiritOfMountain } from 'model/Cards'
import { Hammer } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const QuakeHammer: MasterMove = {
  originalName: 'Quake Hammer',
  weapons: () => [Hammer],
  effects: () => ['Aura Damage', 'Gnome Damage', 'Defense Up'],
  cards: () => [SpiritOfMountain]
}
