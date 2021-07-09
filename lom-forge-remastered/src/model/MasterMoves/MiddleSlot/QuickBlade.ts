import { Clown } from 'model/Cards'
import { Knife } from 'model/Equipment/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const QuickBlade: MasterMove = {
  id: 'QuickBlade',
  name: 'Quick Blade',
  slot: 'middle',
  effects: () => ['Attack Gauge +'],
  relatedWeapons: () => [Knife],
  relatedCards: () => [Clown]
}
