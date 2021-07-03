import {
  Axe,
  Bow,
  Flail,
  Glove,
  Hammer,
  Knife,
  Spear,
  Staff,
  Sword,
  TwoHandedAxe,
  TwoHandedSword
} from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Jump: MasterMove = {
  originalName: 'Jump',
  weapons: () => [Knife, Sword, Axe, TwoHandedSword, TwoHandedAxe, Hammer, Spear, Staff, Glove, Flail, Bow],
  effects: () => ['Default (Bottom Slot)']
}
