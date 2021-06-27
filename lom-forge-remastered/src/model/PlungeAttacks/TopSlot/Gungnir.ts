import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const Gungnir = new PlungeAttack({
  slot: 1,
  name: 'Gungnir',
  weapons: [Weapon.Spear],
  description: 'Spirit Up, Attack Gauge +',
  requiredCards: ['Ruler of Sky']
})
