import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const QuickBlade = new PlungeAttack({
  slot: 2,
  name: 'Quick Blade',
  weapons: [Weapon.Knife],
  description: 'Attack Gauge +',
  requiredCards: ['Clown']
})
