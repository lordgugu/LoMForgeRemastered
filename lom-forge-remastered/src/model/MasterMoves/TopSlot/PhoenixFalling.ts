import { Sage } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { TopSlotMasterMove } from 'model/MasterMoves'

export const PhoenixFalling: TopSlotMasterMove = {
  slot: 'Top',
  originalName: 'Phoenix Falling',
  weapons: () => [Bow],
  effects: () => ['Aerial Damage +', 'Flameburst vs. Aerial'],
  cards: () => [Sage]
}
