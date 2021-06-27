import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const RedDream = new PlungeAttack({
  slot: 3,
  name: 'Red Dream',
  weapons: [Weapon.Flail],
  description: 'Power Up, Attack Gauge +',
  requiredCards: ['Mother of Gods']
})
