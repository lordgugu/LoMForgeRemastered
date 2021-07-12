import { Clown } from 'model/Cards/None'
import { Knife } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const QuickBlade: MasterMove = {
  id: 'QuickBlade',
  name: 'Quick Blade',
  slot: 'middle',
  effects: () => ['Attack Gauge +'],
  relatedWeapons: () => [Knife],
  relatedCards: () => [Clown]
}
