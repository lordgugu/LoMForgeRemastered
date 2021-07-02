import { Clown } from 'model/Cards'
import { Knife } from 'model/Equipment'
import { MiddleSlotMasterMove } from 'model/MasterMoves'

export const QuickBlade: MiddleSlotMasterMove = {
  slot: 'Middle',
  originalName: 'Quick Blade',
  weapons: () => [Knife],
  effects: () => ['Attack Gauge +'],
  cards: () => [Clown]
}
