import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const Caduceus = new PlungeAttack({
  slot: 1,
  name: 'Caduceus',
  weapons: [Weapon.Staff],
  description: 'Double damage against insects, may also inflict paralysis on insects',
  requiredCards: ['Wind God']
})
