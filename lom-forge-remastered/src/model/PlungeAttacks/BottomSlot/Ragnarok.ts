import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const Ragnarok = new PlungeAttack({
  slot: 3,
  name: 'Ragnarok',
  weapons: [Weapon.TwoHandedSword],
  description: 'Power Up',
  requiredCards: ['Ragnarok']
})
