import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'
import { Axe } from 'model/Equipment'

export const Woodchopper: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Woodchopper',
  weapons: [Axe],
  effects: ['Double damage against plants'],
  cards: ['Wanderer']
}
