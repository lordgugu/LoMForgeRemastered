import { MoonGoddess } from 'model/Cards'
import { Sword } from 'model/Equipment'
import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'

export const Moonlight: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Moonlight',
  weapons: () => [Sword],
  effects: () => ['Aquatic Damage +', 'Sleep vs. Aquatic'],
  cards: () => [MoonGoddess]
}
