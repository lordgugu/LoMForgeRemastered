import { Axe, Flail, Glove, Hammer, Knife, Spear, Staff, Sword, TwoHandedAxe, TwoHandedSword } from 'model/Equipment'
import { TopSlotPlungeAttack } from 'model/PlungeAttacks'

export const Thrust: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Thrust',
  weapons: () => [Knife, Sword, Axe, TwoHandedSword, TwoHandedAxe, Hammer, Spear, Staff, Glove, Flail],
  effects: () => ['Default (Top Slot)']
}
