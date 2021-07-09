import { Sage } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const PhoenixFalling: MasterMove = {
  id: 'PhoenixFalling',
  name: 'Phoenix Falling',
  slot: 'top',
  effects: () => ['Aerial Damage +', 'Flameburst vs. Aerial'],
  relatedWeapons: () => [Bow],
  relatedCards: () => [Sage]
}
