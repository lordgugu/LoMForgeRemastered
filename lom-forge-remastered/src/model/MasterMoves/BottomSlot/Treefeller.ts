import { Leviathan } from 'model/Cards'
import { TwoHandedAxe } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Treefeller: MasterMove = {
  id: 'Treefeller',
  name: 'Treefeller',
  effects: () => ['Plant Damage +', 'Dizzy vs. Plant'],
  relatedWeapons: () => [TwoHandedAxe],
  relatedCards: () => [Leviathan]
}
