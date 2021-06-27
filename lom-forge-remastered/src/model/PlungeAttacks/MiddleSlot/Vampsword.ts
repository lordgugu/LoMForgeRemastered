import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const Vampsword = new PlungeAttack({
  slot: 2,
  name: 'Vampsword',
  weapons: [Weapon.Sword],
  description: "Restores user's lost HP up to 25% of damage dealt",
  requiredCards: ['Witch of Moon']
})
