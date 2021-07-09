import { LordOfFlies } from 'model/Cards'
import { Knife } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const SinisterBlade: MasterMove = {
  id: 'SinisterBlade',
  name: 'Sinister Blade',
  slot: 'bottom',
  effects: () => ['Demi-Human Damage +'],
  relatedWeapons: () => [Knife],
  relatedCards: () => [LordOfFlies]
}
