import { Clown } from 'model/Cards'
import { Knife } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const QuickBlade: MasterMove = {
  originalName: 'Quick Blade',
  weapons: () => [Knife],
  effects: () => ['Attack Gauge +'],
  cards: () => [Clown]
}
