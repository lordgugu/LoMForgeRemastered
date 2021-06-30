import { TopSlotPlungeAttack } from 'model/PlungeAttacks'
import { Spear } from 'model/Weapons'

export const Trident: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Trident',
  weapons: [Spear],
  effects: ['Double damage against aquatics', 'May inflict confusion on aquatics'],
  cards: ['Ocean God']
}
