import { Leviathan } from 'model/Cards'
import { TwoHandedAxe } from 'model/Equipment'
import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'

export const Treefeller: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Treefeller',
  weapons: () => [TwoHandedAxe],
  effects: () => ['Plant Damage +', 'Dizzy vs. Plant'],
  cards: () => [Leviathan]
}
