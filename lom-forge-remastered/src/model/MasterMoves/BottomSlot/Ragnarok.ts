import { Ragnarok as RagnarokCard } from 'model/Cards'
import { TwoHandedSword } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Ragnarok: MasterMove = {
  originalName: 'Ragnarok',
  weapons: () => [TwoHandedSword],
  effects: () => ['Power Up'],
  cards: () => [RagnarokCard]
}
