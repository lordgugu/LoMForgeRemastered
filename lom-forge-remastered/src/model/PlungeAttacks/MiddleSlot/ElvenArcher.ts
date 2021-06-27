import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const ElvenArcher = new PlungeAttack({
  slot: 2,
  name: 'Elven Archer',
  weapons: [Weapon.Bow],
  description: 'May also inflict paralysis',
  requiredCards: ['Spirit (Forest)']
})
