import { OceanGod } from 'model/Cards'
import { Spear } from 'model/Equipment'
import { TopSlotMasterMove } from 'model/MasterMoves'

export const Trident: TopSlotMasterMove = {
  slot: 'Top',
  originalName: 'Trident',
  weapons: () => [Spear],
  effects: () => ['Aquatic Damage +', 'Confusion vs. Aquatic'],
  cards: () => [OceanGod]
}
