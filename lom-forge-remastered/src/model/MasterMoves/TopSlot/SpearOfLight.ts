import { ManOfValor } from 'model/Cards'
import { Spear } from 'model/Equipment'
import { TopSlotMasterMove } from 'model/MasterMoves'

export const SpearOfLight: TopSlotMasterMove = {
  slot: 'Top',
  originalName: 'Spear of Light',
  weapons: () => [Spear],
  effects: () => ['Wisp Damage'],
  cards: () => [ManOfValor]
}
