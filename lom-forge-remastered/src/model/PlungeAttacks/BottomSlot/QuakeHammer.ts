import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const QuakeHammer = new PlungeAttack({
  slot: 3,
  name: 'Quake Hammer',
  weapons: [Weapon.Hammer],
  description: 'Inflicts Aura/Gnome damage, Defense Up',
  requiredCards: ['Spirit (Mountain)']
})
