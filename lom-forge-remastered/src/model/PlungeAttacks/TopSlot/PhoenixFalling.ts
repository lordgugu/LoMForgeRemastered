import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const PhoenixFalling = new PlungeAttack({
  slot: 1,
  name: 'Phoenix Falling',
  weapons: [Weapon.Bow],
  description: 'Double damage against aerials, may also inflict flameburst on aerials',
  requiredCards: ['Sage']
})
