import { TopSlotPlungeAttack } from 'model/PlungeAttacks'
import { Bow } from 'model/Weapons'

export const SolarFlare: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Solar Flare',
  weapons: [Bow],
  effects: ['Inflicts Wisp Damage'],
  cards: ['Sun God']
}
