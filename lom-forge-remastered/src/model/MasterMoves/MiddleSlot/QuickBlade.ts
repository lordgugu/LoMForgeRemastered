import { Clown } from 'model/Cards'
import { Knife } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const QuickBlade: MasterMove = {
  id: 'QuickBlade',
  name: 'Quick Blade',
  effects: () => ['Attack Gauge +'],
  relatedWeapons: () => [Knife],
  relatedCards: () => [Clown]
}
