import { Axe, Flail, Glove, Hammer, Knife, Spear, Staff, Sword, TwoHandedAxe, TwoHandedSword } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Thrust: MasterMove = {
  originalName: 'Thrust',
  weapons: () => [Knife, Sword, Axe, TwoHandedSword, TwoHandedAxe, Hammer, Spear, Staff, Glove, Flail],
  effects: () => ['Default (Top Slot)']
}
