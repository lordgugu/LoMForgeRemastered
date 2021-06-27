import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const SpearOfLight = new PlungeAttack({
  slot: 1,
  name: 'Spear of Light',
  weapons: [Weapon.Spear],
  description: 'Inflicts Wisp damage',
  requiredCards: ['Man of Valour']
})
