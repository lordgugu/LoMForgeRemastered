import { LordOfFlies } from 'model/Cards'
import { Knife } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const SinisterBlade: MasterMove = {
  originalName: 'Sinister Blade',
  weapons: () => [Knife],
  effects: () => ['Demi-Human Damage +'],
  cards: () => [LordOfFlies]
}
