import { Cleric } from 'model/Cards/None'
import { Staff } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const Demonicide: MasterMove = {
  id: 'Demonicide',
  name: 'Demonicide',
  slot: 'bottom',
  effects: () => ['Demon Damage +', 'Flameburst vs. Demon'],
  relatedWeapons: () => [Staff],
  relatedCards: () => [Cleric]
}
