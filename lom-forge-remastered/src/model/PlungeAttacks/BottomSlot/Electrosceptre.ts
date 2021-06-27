import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const Electrosceptre = new PlungeAttack({
  slot: 3,
  name: 'Electrosceptre',
  weapons: [Weapon.Staff],
  description: 'Inflicts Sala/Jinn damage',
  requiredCards: ['Ruler of Sky']
})
