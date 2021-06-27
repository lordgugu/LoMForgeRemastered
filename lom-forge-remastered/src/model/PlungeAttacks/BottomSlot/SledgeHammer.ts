import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const SledgeHammer = new PlungeAttack({
  slot: 3,
  name: 'Sledge Hammer',
  weapons: [Weapon.Hammer],
  description: 'Double damage to poltergeists, may also inflict dizzy on poltergeists',
  requiredCards: ['Blacksmith God']
})
