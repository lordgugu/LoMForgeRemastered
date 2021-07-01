import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'
import { Staff } from 'model/Equipment'

export const Demonicide: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Demonicide',
  weapons: [Staff],
  effects: ['Double damage against demons', 'May also inflict flameburst on demons'],
  cards: ['Cleric']
}
