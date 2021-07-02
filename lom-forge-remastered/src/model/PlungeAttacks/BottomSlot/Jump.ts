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
import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'

export const Jump: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Jump',
  weapons: () => [Knife, Sword, Axe, TwoHandedSword, TwoHandedAxe, Hammer, Spear, Staff, Glove, Flail, Bow],
  effects: () => ['Default (Bottom Slot)']
}
