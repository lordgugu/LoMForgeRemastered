import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const GreenPrincess = new PlungeAttack({
  slot: 1,
  name: 'Green Princess',
  weapons: [Weapon.Flail],
  description: 'Defense Up, Attack Gauge +',
  requiredCards: ['Mother of Gods']
})
