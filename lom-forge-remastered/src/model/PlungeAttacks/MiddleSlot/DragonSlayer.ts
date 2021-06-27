import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const DragonSlayer = new PlungeAttack({
  slot: 2,
  name: 'Dragon Slayer',
  weapons: [Weapon.Axe],
  description: 'Double damage against dragons, may also inflict sleep on dragons',
  requiredCards: ['God of War']
})
