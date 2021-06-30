import { TopSlotPlungeAttack } from 'model/PlungeAttacks'
import { Bow } from 'model/Weapons'

export const Shot: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Shot',
  weapons: [Bow],
  effects: ['Default plunge attack for the top slot'],
  cards: []
}
