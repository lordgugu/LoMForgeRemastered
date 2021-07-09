import { Axe, Flail, Glove, Hammer, Knife, Spear, Staff, Sword, TwoHandedAxe, TwoHandedSword } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Thrust: MasterMove = {
  id: 'Thrust',
  name: 'Thrust',
  slot: 'top',
  effects: () => ['Default (Top Slot)'],
  relatedWeapons: () => [Knife, Sword, Axe, TwoHandedSword, TwoHandedAxe, Hammer, Spear, Staff, Glove, Flail]
}
