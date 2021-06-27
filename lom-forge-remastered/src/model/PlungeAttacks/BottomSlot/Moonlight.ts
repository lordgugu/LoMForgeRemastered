import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const Moonlight = new PlungeAttack({
  slot: 3,
  name: 'Moonlight',
  weapons: [Weapon.Sword],
  description: 'Double damage against aquatics, may also inflict sleep on aquatics',
  requiredCards: ['Moon Goddess']
})
