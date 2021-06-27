import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const Jump = new PlungeAttack({
  slot: 3,
  name: 'Jump',
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
    Weapon.Flail,
    Weapon.Bow
  ],
  description: 'Default plunge attack for the bottom slot',
  requiredCards: []
})
