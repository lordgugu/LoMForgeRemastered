import { ManOfValor } from 'model/Cards'
import { Spear } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const SpearOfLight: MasterMove = {
  originalName: 'Spear of Light',
  weapons: () => [Spear],
  effects: () => ['Wisp Damage'],
  cards: () => [ManOfValor]
}
