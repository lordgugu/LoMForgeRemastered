import { WindGod } from 'model/Cards/HeavenGod'
import { Staff } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const Caduceus: MasterMove = {
  id: 'Caduceus',
  name: 'Caduceus',
  slot: 'top',
  effects: () => ['Insect Damage +', 'Paralysis vs. Insect'],
  relatedWeapons: () => [Staff],
  relatedCards: () => [WindGod]
}
