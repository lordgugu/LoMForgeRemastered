import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const LunarShot = new PlungeAttack({
  slot: 2,
  name: 'Lunar Shot',
  weapons: [Weapon.Bow],
  description: 'Inflicts Shade damage',
  requiredCards: ['Moon Goddess']
})
