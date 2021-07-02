import { Cleric } from 'model/Cards'
import { Staff } from 'model/Equipment'
import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'

export const Demonicide: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Demonicide',
  weapons: () => [Staff],
  effects: () => ['Demon Damage +', 'Flameburst vs. Demon'],
  cards: () => [Cleric]
}
