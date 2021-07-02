import { Cleric } from 'model/Cards'
import { Staff } from 'model/Equipment'
import { BottomSlotMasterMove } from 'model/MasterMoves'

export const Demonicide: BottomSlotMasterMove = {
  slot: 'Bottom',
  originalName: 'Demonicide',
  weapons: () => [Staff],
  effects: () => ['Demon Damage +', 'Flameburst vs. Demon'],
  cards: () => [Cleric]
}
