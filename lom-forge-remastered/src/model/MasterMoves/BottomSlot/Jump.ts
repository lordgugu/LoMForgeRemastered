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
import { BottomSlotMasterMove } from 'model/MasterMoves'

export const Jump: BottomSlotMasterMove = {
  slot: 'Bottom',
  originalName: 'Jump',
  weapons: () => [Knife, Sword, Axe, TwoHandedSword, TwoHandedAxe, Hammer, Spear, Staff, Glove, Flail, Bow],
  effects: () => ['Default (Bottom Slot)']
}
