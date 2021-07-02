import { Axe, Flail, Glove, Hammer, Knife, Spear, Staff, Sword, TwoHandedAxe, TwoHandedSword } from 'model/Equipment'
import { TopSlotMasterMove } from 'model/MasterMoves'

export const Thrust: TopSlotMasterMove = {
  slot: 'Top',
  originalName: 'Thrust',
  weapons: () => [Knife, Sword, Axe, TwoHandedSword, TwoHandedAxe, Hammer, Spear, Staff, Glove, Flail],
  effects: () => ['Default (Top Slot)']
}
