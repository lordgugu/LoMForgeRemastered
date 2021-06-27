import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const Mjolnir = new PlungeAttack({
  slot: 3,
  name: 'Mjolnir',
  weapons: [Weapon.Hammer],
  description: 'Inflicts Sala/Jinn damage, Attack Gauge +',
  requiredCards: ['Thunder God']
})
