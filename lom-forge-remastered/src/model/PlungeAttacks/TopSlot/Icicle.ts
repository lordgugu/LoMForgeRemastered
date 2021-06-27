import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const Icicle = new PlungeAttack({
  slot: 1,
  name: 'Icicle',
  weapons: [Weapon.Bow],
  description: 'Exclusive to the Waveruck, inflicts Undine damage, may also inflict freeze',
  requiredCards: []
})
