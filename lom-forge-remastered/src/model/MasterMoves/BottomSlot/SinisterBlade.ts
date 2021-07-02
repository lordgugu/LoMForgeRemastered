import { LordOfFlies } from 'model/Cards'
import { Knife } from 'model/Equipment'
import { BottomSlotMasterMove } from 'model/MasterMoves'

export const SinisterBlade: BottomSlotMasterMove = {
  slot: 'Bottom',
  originalName: 'Sinister Blade',
  weapons: () => [Knife],
  effects: () => ['Demi-Human Damage +'],
  cards: () => [LordOfFlies]
}
