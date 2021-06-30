import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'
import { Axe } from 'model/Weapons'

export const Woodchopper: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Woodchopper',
  weapons: [Axe],
  effects: ['Double damage against plants'],
  cards: ['Wanderer']
}
