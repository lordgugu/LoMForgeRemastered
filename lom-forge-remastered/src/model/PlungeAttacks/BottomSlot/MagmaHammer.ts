import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const MagmaHammer = new PlungeAttack({
  slot: 3,
  name: 'Magma Hammer',
  weapons: [Weapon.Hammer],
  description: 'Inflicts Sala/Aura damage, Defense Up',
  requiredCards: ['Volcano']
})
