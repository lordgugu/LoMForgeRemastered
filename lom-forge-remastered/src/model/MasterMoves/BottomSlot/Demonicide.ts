import { Cleric } from 'model/Cards'
import { Staff } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Demonicide: MasterMove = {
  originalName: 'Demonicide',
  weapons: () => [Staff],
  effects: () => ['Demon Damage +', 'Flameburst vs. Demon'],
  cards: () => [Cleric]
}
