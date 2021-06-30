import { TopSlotPlungeAttack } from 'model/PlungeAttacks'
import { Axe, Flail, Glove, Hammer, Knife, Spear, Staff, Sword, TwoHandedAxe, TwoHandedSword } from 'model/Weapons'

export const Thrust: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Thrust',
  weapons: [Knife, Sword, Axe, TwoHandedSword, TwoHandedAxe, Hammer, Spear, Staff, Glove, Flail],
  effects: ['Default plunge attack for the top slot'],
  cards: []
}
