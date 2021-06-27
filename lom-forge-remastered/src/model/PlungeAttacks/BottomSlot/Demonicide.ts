import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const Demonicide = new PlungeAttack({
  slot: 3,
  name: 'Demonicide',
  weapons: [Weapon.Staff],
  description: 'Double damage against demons, may also inflict flameburst on demons',
  requiredCards: ['Cleric']
})
