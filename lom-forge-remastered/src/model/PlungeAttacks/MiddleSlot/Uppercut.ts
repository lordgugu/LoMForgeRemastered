import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'
import { Axe, Flail, Glove, Hammer, Knife, Spear, Staff, Sword, TwoHandedAxe, TwoHandedSword } from 'model/Weapons'

export const Uppercut: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  name: 'Uppercut',
  weapons: [Knife, Sword, Axe, TwoHandedSword, TwoHandedAxe, Hammer, Spear, Staff, Glove, Flail],
  effects: ['Default plunge attack for the middle slot'],
  cards: []
}
