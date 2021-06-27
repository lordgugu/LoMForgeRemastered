import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const DoubleShot = new PlungeAttack({
  slot: 2,
  name: 'Double Shot',
  weapons: [Weapon.Bow],
  description: 'Default plunge attack for the middle slot',
  requiredCards: []
})
