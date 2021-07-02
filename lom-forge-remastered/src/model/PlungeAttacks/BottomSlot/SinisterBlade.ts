import { LordOfFlies } from 'model/Cards'
import { Knife } from 'model/Equipment'
import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'

export const SinisterBlade: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Sinister Blade',
  weapons: () => [Knife],
  effects: () => ['Demi-Human Damage +'],
  cards: () => [LordOfFlies]
}
