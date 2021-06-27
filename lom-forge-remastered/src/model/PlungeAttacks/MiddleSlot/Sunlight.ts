import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const Sunlight = new PlungeAttack({
  slot: 2,
  name: 'Sunlight',
  weapons: [Weapon.Sword],
  description: 'Double damage against undead, may also inflict flameburst on undead',
  requiredCards: ['Sun God']
})
