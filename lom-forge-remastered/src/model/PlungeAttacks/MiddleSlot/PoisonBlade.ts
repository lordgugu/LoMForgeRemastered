import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const PoisonBlade = new PlungeAttack({
  slot: 2,
  name: 'Poison Blade',
  weapons: [Weapon.Knife],
  description: 'May inflict poison',
  requiredCards: ['Beast-Headed God']
})
