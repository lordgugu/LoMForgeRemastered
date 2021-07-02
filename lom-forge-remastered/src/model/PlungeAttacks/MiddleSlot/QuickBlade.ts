import { Clown } from 'model/Cards'
import { Knife } from 'model/Equipment'
import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'

export const QuickBlade: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Quick Blade',
  weapons: () => [Knife],
  effects: () => ['Attack Gauge +'],
  cards: () => [Clown]
}
