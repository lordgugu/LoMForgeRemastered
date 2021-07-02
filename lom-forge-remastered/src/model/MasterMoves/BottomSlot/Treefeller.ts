import { Leviathan } from 'model/Cards'
import { TwoHandedAxe } from 'model/Equipment'
import { BottomSlotMasterMove } from 'model/MasterMoves'

export const Treefeller: BottomSlotMasterMove = {
  slot: 'Bottom',
  originalName: 'Treefeller',
  weapons: () => [TwoHandedAxe],
  effects: () => ['Plant Damage +', 'Dizzy vs. Plant'],
  cards: () => [Leviathan]
}
