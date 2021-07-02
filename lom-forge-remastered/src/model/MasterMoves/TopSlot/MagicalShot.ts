import { Raven, Witch, Wolf } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { TopSlotMasterMove } from 'model/MasterMoves'

export const MagicalShot: TopSlotMasterMove = {
  slot: 'Top',
  originalName: 'Magical Shot',
  weapons: () => [Bow],
  effects: () => ['Demon Damage +', 'Confusion vs. Demon', 'Attack Guage +'],
  cards: () => [Witch, Raven, Wolf],
  notes: () => ['Requires that all three cards appear in visible slots']
}
