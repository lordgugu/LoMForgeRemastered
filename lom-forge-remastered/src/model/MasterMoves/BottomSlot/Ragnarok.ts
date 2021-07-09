import { Ragnarok as RagnarokCard } from 'model/Cards'
import { TwoHandedSword } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Ragnarok: MasterMove = {
  id: 'Ragnarok',
  name: 'Ragnarok',
  slot: 'bottom',
  effects: () => ['Power Up'],
  relatedWeapons: () => [TwoHandedSword],
  relatedCards: () => [RagnarokCard]
}
