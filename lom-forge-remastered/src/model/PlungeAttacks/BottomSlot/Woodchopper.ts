import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const Woodchopper = new PlungeAttack({
  slot: 3,
  name: 'Woodchopper',
  weapons: [Weapon.Axe],
  description: 'Double damage against plants',
  requiredCards: ['Wanderer']
})
