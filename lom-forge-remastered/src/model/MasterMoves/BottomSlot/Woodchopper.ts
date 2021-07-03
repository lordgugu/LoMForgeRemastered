import { Wanderer } from 'model/Cards'
import { Axe } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Woodchopper: MasterMove = {
  originalName: 'Woodchopper',
  weapons: () => [Axe],
  effects: () => ['Plant Damage +'],
  cards: () => [Wanderer]
}
