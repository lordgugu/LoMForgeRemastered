import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const Treefeller = new PlungeAttack({
  slot: 3,
  name: 'Treefeller',
  weapons: [Weapon.TwoHandedAxe],
  description: 'Double damage against plants, may also inflict dizzy on plants',
  requiredCards: ['Leviathan']
})
