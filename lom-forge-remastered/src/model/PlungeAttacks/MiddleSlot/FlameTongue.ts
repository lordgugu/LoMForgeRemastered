import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const FlameTongue = new PlungeAttack({
  slot: 2,
  name: 'Flame Tongue',
  weapons: [Weapon.Sword],
  description: 'Inflicts Sala damage, may also inflict flameburst',
  requiredCards: ['God of Destruction']
})
