import { Sage } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const PhoenixFalling: MasterMove = {
  originalName: 'Phoenix Falling',
  weapons: () => [Bow],
  effects: () => ['Aerial Damage +', 'Flameburst vs. Aerial'],
  cards: () => [Sage]
}
