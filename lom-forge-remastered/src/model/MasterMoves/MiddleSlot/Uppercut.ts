import {
  Axe,
  Flail,
  Glove,
  Hammer,
  Knife,
  Spear,
  Staff,
  Sword,
  TwoHandedAxe,
  TwoHandedSword
} from 'model/Equipment/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const Uppercut: MasterMove = {
  id: 'Uppercut',
  name: 'Uppercut',
  slot: 'middle',
  effects: () => ['Default (Middle Slot)'],
  relatedWeapons: () => [Knife, Sword, Axe, TwoHandedSword, TwoHandedAxe, Hammer, Spear, Staff, Glove, Flail]
}
