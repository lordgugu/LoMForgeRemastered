import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'
import { TwoHandedAxe } from 'model/Weapons'

export const Treefeller: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Treefeller',
  weapons: [TwoHandedAxe],
  effects: ['Double damage against plants', 'May also inflict dizzy on plants'],
  cards: ['Leviathan']
}
