import { OceanGod } from 'model/Cards'
import { Spear } from 'model/Equipment/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const Trident: MasterMove = {
  id: 'Trident',
  name: 'Trident',
  slot: 'top',
  effects: () => ['Aquatic Damage +', 'Confusion vs. Aquatic'],
  relatedWeapons: () => [Spear],
  relatedCards: () => [OceanGod]
}
