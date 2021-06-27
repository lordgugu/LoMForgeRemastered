import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const Shot = new PlungeAttack({
  slot: 1,
  name: 'Shot',
  weapons: [Weapon.Bow],
  description: 'Default plunge attack for the top slot',
  requiredCards: []
})
