import { Weapon } from 'model/Weapons'
import { PlungeAttack } from '..'

export const HandOfMidas = new PlungeAttack({
  slot: 2,
  name: 'Hand of Midas',
  weapons: [Weapon.Glove],
  description: 'Converts experience to Lucre, Attack Gauge -',
  requiredCards: ['King']
})
