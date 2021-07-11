import { Ragnarok as RagnarokCard } from 'model/Cards/World'
import { TwoHandedSword } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const Ragnarok: MasterMove = {
  id: 'Ragnarok',
  name: 'Ragnarok',
  slot: 'bottom',
  effects: () => ['Power Up'],
  relatedWeapons: () => [TwoHandedSword],
  relatedCards: () => [RagnarokCard]
}
