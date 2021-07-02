import { WitchOfMoon } from 'model/Cards'
import { Sword } from 'model/Equipment'
import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'

export const Vampsword: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Vampsword',
  weapons: () => [Sword],
  effects: () => ['Absorbs 25% of Damage Dealt'],
  cards: () => [WitchOfMoon]
}
