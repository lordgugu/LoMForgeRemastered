import { Ragnarok as RagnarokCard } from 'model/Cards'
import { TwoHandedSword } from 'model/Equipment'
import { BottomSlotMasterMove } from 'model/MasterMoves'

export const Ragnarok: BottomSlotMasterMove = {
  slot: 'Bottom',
  originalName: 'Ragnarok',
  weapons: () => [TwoHandedSword],
  effects: () => ['Power Up'],
  cards: () => [RagnarokCard]
}
