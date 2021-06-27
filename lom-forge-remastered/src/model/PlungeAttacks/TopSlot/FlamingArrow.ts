import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const FlamingArrow = new PlungeAttack({
  slot: 1,
  name: 'Flaming Arrow',
  weapons: [Weapon.Bow],
  description: 'Exclusive to the Sidewinder, inflicts Sala damage, may also inflict flameburst',
  requiredCards: []
})
