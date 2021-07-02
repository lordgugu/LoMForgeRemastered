import { WindGod } from 'model/Cards'
import { Staff } from 'model/Equipment'
import { TopSlotMasterMove } from 'model/MasterMoves'

export const Caduceus: TopSlotMasterMove = {
  slot: 'Top',
  originalName: 'Caduceus',
  weapons: () => [Staff],
  effects: () => ['Insect Damage +', 'Paralysis vs. Insect'],
  cards: () => [WindGod]
}
