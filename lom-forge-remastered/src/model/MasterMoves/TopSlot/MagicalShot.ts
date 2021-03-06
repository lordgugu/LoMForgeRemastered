import { Raven, Witch, Wolf } from 'model/Cards/None'
import { Bow } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const MagicalShot: MasterMove = {
  id: 'MagicalShot',
  name: 'Magical Shot',
  slot: 'top',
  effects: () => ['Demon Damage +', 'Confusion vs. Demon', 'Attack Guage +'],
  notes: () => ['Requires that all three cards appear in visible slots'],
  relatedWeapons: () => [Bow],
  relatedCards: () => [Witch, Raven, Wolf]
}
