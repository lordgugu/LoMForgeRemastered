import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const SolarFlare = new PlungeAttack({
  slot: 1,
  name: 'Solar Flare',
  weapons: [Weapon.Bow],
  description: 'Inflicts Wisp damage',
  requiredCards: ['Sun God']
})
