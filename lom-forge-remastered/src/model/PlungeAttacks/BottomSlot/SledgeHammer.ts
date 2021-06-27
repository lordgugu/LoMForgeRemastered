import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'
import { Hammer } from 'model/Weapons'

export const SledgeHammer: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  name: 'Sledge Hammer',
  weapons: [Hammer],
  effects: ['Double damage to poltergeists', 'May also inflict dizzy on poltergeists'],
  cards: ['Blacksmith God']
}
