import { Ragnarok as RagnarokCard } from 'model/Cards'
import { TwoHandedSword } from 'model/Equipment'
import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'

export const Ragnarok: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Ragnarok',
  weapons: () => [TwoHandedSword],
  effects: () => ['Power Up'],
  cards: () => [RagnarokCard]
}
