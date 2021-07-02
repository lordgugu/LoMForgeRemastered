import { Axe, Flail, Glove, Hammer, Knife, Spear, Staff, Sword, TwoHandedAxe, TwoHandedSword } from 'model/Equipment'
import { MiddleSlotMasterMove } from 'model/MasterMoves'

export const Uppercut: MiddleSlotMasterMove = {
  slot: 'Middle',
  originalName: 'Uppercut',
  weapons: () => [Knife, Sword, Axe, TwoHandedSword, TwoHandedAxe, Hammer, Spear, Staff, Glove, Flail],
  effects: () => ['Default (Middle Slot)']
}
