import { OceanGod } from 'model/Cards'
import { Spear } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Trident: MasterMove = {
  originalName: 'Trident',
  weapons: () => [Spear],
  effects: () => ['Aquatic Damage +', 'Confusion vs. Aquatic'],
  cards: () => [OceanGod]
}
