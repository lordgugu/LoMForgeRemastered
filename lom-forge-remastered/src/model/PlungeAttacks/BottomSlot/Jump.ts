import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'
import { Axe, Bow, Flail, Glove, Hammer, Knife, Spear, Staff, Sword, TwoHandedAxe, TwoHandedSword } from 'model/Weapons'

export const Jump: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Jump',
  weapons: [Knife, Sword, Axe, TwoHandedSword, TwoHandedAxe, Hammer, Spear, Staff, Glove, Flail, Bow],
  effects: ['Default plunge attack for the bottom slot'],
  cards: []
}
