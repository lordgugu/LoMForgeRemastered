import { WindGod } from 'model/Cards'
import { Staff } from 'model/Equipment'
import { TopSlotPlungeAttack } from 'model/PlungeAttacks'

export const Caduceus: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Caduceus',
  weapons: () => [Staff],
  effects: () => ['Insect Damage +', 'Paralysis vs. Insect'],
  cards: () => [WindGod]
}
