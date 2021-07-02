import { Axe, Flail, Glove, Hammer, Knife, Spear, Staff, Sword, TwoHandedAxe, TwoHandedSword } from 'model/Equipment'
import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'

export const Uppercut: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Uppercut',
  weapons: () => [Knife, Sword, Axe, TwoHandedSword, TwoHandedAxe, Hammer, Spear, Staff, Glove, Flail],
  effects: () => ['Default (Middle Slot)']
}
