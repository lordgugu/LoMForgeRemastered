import { Leviathan } from 'model/Cards'
import { TwoHandedAxe } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const Treefeller: MasterMove = {
  originalName: 'Treefeller',
  weapons: () => [TwoHandedAxe],
  effects: () => ['Plant Damage +', 'Dizzy vs. Plant'],
  cards: () => [Leviathan]
}
