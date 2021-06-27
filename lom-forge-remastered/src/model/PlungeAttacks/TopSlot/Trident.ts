import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const Trident = new PlungeAttack({
  slot: 1,
  name: 'Trident',
  weapons: [Weapon.Spear],
  description: 'Double damage against aquatics, may also inflict confusion on aquatics',
  requiredCards: ['Ocean God']
})
