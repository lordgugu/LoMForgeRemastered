import { Sage } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { TopSlotPlungeAttack } from 'model/PlungeAttacks'

export const PhoenixFalling: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Phoenix Falling',
  weapons: () => [Bow],
  effects: () => ['Aerial Damage +', 'Flameburst vs. Aerial'],
  cards: () => [Sage]
}
