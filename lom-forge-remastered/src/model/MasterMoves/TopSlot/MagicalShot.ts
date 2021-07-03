import { Raven, Witch, Wolf } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const MagicalShot: MasterMove = {
  originalName: 'Magical Shot',
  weapons: () => [Bow],
  effects: () => ['Demon Damage +', 'Confusion vs. Demon', 'Attack Guage +'],
  cards: () => [Witch, Raven, Wolf],
  notes: () => ['Requires that all three cards appear in visible slots']
}
