import { LordOfFlies } from 'model/Cards'
import { Knife } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const SinisterBlade: MasterMove = {
  id: 'SinisterBlade',
  name: 'Sinister Blade',
  effects: () => ['Demi-Human Damage +'],
  relatedWeapons: () => [Knife],
  relatedCards: () => [LordOfFlies]
}
