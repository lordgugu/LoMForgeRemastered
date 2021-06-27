import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const GoldenTouch = new PlungeAttack({
  slot: 3,
  name: 'Golden Touch',
  weapons: [Weapon.Staff],
  description: 'Converts experience to Lucre, Attack Gauge -',
  requiredCards: ['Wings of Darkness']
})
