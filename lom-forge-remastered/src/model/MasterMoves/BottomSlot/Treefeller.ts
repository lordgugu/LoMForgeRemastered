import { Leviathan } from 'model/Cards/EvilGod'
import { TwoHandedAxe } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const Treefeller: MasterMove = {
  id: 'Treefeller',
  name: 'Treefeller',
  slot: 'bottom',
  effects: () => ['Plant Damage +', 'Dizzy vs. Plant'],
  relatedWeapons: () => [TwoHandedAxe],
  relatedCards: () => [Leviathan]
}
