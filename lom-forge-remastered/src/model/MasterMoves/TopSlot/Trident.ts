import { OceanGod } from 'model/Cards/HeavenGod'
import { Spear } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const Trident: MasterMove = {
  id: 'Trident',
  name: 'Trident',
  slot: 'top',
  effects: () => ['Aquatic Damage +', 'Confusion vs. Aquatic'],
  relatedWeapons: () => [Spear],
  relatedCards: () => [OceanGod]
}
