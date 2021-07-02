import { SpiritOfMountain } from 'model/Cards'
import { Hammer } from 'model/Equipment'
import { BottomSlotMasterMove } from 'model/MasterMoves'

export const QuakeHammer: BottomSlotMasterMove = {
  slot: 'Bottom',
  originalName: 'Quake Hammer',
  weapons: () => [Hammer],
  effects: () => ['Aura Damage', 'Gnome Damage', 'Defense Up'],
  cards: () => [SpiritOfMountain]
}
