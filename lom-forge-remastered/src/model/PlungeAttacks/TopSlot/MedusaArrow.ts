import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const MedusaArrow = new PlungeAttack({
  slot: 1,
  name: 'Medusa Arrow',
  weapons: [Weapon.Bow],
  description: 'Exclusive to the Sacred Bow, may also inflict petrification',
  requiredCards: []
})
