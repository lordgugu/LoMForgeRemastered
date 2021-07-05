import { Wanderer } from 'model/Cards'
import { Axe } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Woodchopper: MasterMove = {
  id: 'Woodchopper',
  name: 'Woodchopper',
  effects: () => ['Plant Damage +'],
  relatedWeapons: () => [Axe],
  relatedCards: () => [Wanderer]
}
