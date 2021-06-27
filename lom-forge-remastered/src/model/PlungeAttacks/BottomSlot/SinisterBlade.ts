import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const SinisterBlade = new PlungeAttack({
  slot: 3,
  name: 'Sinister Blade',
  weapons: [Weapon.Knife],
  description: 'Double damage against demi-humans',
  requiredCards: ['Lord of Flies']
})
