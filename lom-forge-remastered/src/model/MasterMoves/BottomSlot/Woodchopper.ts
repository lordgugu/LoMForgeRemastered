import { Wanderer } from 'model/Cards'
import { Axe } from 'model/Equipment'
import { BottomSlotMasterMove } from 'model/MasterMoves'

export const Woodchopper: BottomSlotMasterMove = {
  slot: 'Bottom',
  originalName: 'Woodchopper',
  weapons: () => [Axe],
  effects: () => ['Plant Damage +'],
  cards: () => [Wanderer]
}
