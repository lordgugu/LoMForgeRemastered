import { TopSlotPlungeAttack } from 'model/PlungeAttacks'
import { Spear } from 'model/Weapons'

export const SpearOfLight: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Spear of Light',
  weapons: [Spear],
  effects: ['Inflicts Wisp Damage'],
  cards: ['Man of Valour']
}
