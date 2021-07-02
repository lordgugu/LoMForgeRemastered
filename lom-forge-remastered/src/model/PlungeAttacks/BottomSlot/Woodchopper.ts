import { Wanderer } from 'model/Cards'
import { Axe } from 'model/Equipment'
import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'

export const Woodchopper: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Woodchopper',
  weapons: () => [Axe],
  effects: () => ['Plant Damage +'],
  cards: () => [Wanderer]
}
