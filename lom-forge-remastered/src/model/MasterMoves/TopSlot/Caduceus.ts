import { WindGod } from 'model/Cards'
import { Staff } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Caduceus: MasterMove = {
  originalName: 'Caduceus',
  weapons: () => [Staff],
  effects: () => ['Insect Damage +', 'Paralysis vs. Insect'],
  cards: () => [WindGod]
}
