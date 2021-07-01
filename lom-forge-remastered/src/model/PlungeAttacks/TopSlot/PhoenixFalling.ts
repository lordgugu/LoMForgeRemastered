import { TopSlotPlungeAttack } from 'model/PlungeAttacks'
import { Bow } from 'model/Equipment'

export const PhoenixFalling: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Phoenix Falling',
  weapons: [Bow],
  effects: ['Double damage against aerials', 'May also inflict flameburst on aerials'],
  cards: ['Sage']
}
