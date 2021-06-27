import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const Thrust = new PlungeAttack({
  slot: 1,
  name: 'Thrust',
  weapons: [
    Weapon.Knife,
    Weapon.Sword,
    Weapon.Axe,
    Weapon.TwoHandedSword,
    Weapon.TwoHandedAxe,
    Weapon.Hammer,
    Weapon.Spear,
    Weapon.Staff,
    Weapon.Glove,
    Weapon.Flail
  ],
  description: 'Default plunge attack for the top slot',
  requiredCards: []
})
