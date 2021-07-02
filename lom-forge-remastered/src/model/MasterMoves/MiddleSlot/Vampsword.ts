import { WitchOfMoon } from 'model/Cards'
import { Sword } from 'model/Equipment'
import { MiddleSlotMasterMove } from 'model/MasterMoves'

export const Vampsword: MiddleSlotMasterMove = {
  slot: 'Middle',
  originalName: 'Vampsword',
  weapons: () => [Sword],
  effects: () => ['Absorbs 25% of Damage Dealt'],
  cards: () => [WitchOfMoon]
}
