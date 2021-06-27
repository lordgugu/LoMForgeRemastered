import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const GameOfDeath = new PlungeAttack({
  slot: 2,
  name: 'Game of Death',
  weapons: [Weapon.Flail],
  description: 'Skill Up, Attack Gauge +',
  requiredCards: ['Mother of Gods']
})
