import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const Uppercut = new PlungeAttack({
  slot: 2,
  name: 'Uppercut',
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
  description: 'Default plunge attack for the middle slot',
  requiredCards: []
})
