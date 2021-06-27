import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const ChaoticAvenger = new PlungeAttack({
  slot: 1,
  name: 'Chaotic Avenger',
  weapons: [Weapon.TwoHandedSword],
  description: 'Inflicts Sala/Gnome/Jinn/Undine damage, Attack Gauge +',
  requiredCards: ['Fallen Angel']
})
