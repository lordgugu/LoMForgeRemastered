import { WitchOfMoon } from 'model/Cards'
import { Sword } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Vampsword: MasterMove = {
  originalName: 'Vampsword',
  weapons: () => [Sword],
  effects: () => ['Absorbs 25% of Damage Dealt'],
  cards: () => [WitchOfMoon]
}
