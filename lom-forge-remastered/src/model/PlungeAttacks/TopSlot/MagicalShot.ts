import { TopSlotPlungeAttack } from 'model/PlungeAttacks'
import { Bow } from 'model/Equipment'

export const MagicalShot: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Magical Shot',
  weapons: [Bow],
  effects: ['Double damage against demons', 'May also inflict confusion on demons', 'Attack Guage +'],
  cards: ['Witch', 'Raven', 'Wolf']
}
