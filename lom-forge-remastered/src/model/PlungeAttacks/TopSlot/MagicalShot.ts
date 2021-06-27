import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const MagicalShot = new PlungeAttack({
  slot: 1,
  name: 'Magical Shot',
  weapons: [Weapon.Bow],
  description: 'Double damage against demons, may also inflict confusion on demons, Attack Gauge +',
  requiredCards: ['Witch', 'Raven', 'Wolf']
})
