import { TopSlotPlungeAttack } from 'model/PlungeAttacks'
import { Bow } from 'model/Weapons'

export const PhoenixFalling: TopSlotPlungeAttack = {
  slot: 'Top',
  name: 'Phoenix Falling',
  weapons: [Bow],
  effects: ['Double damage against aerials', 'May also inflict flameburst on aerials'],
  cards: ['Sage']
}
