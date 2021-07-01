import { TopSlotPlungeAttack } from 'model/PlungeAttacks'
import { Bow } from 'model/Equipment'

export const SolarFlare: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Solar Flare',
  weapons: [Bow],
  effects: ['Inflicts Wisp Damage'],
  cards: ['Sun God']
}
