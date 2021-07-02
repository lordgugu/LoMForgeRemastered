import { BlacksmithGod } from 'model/Cards'
import { Hammer } from 'model/Equipment'
import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'

export const SledgeHammer: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Sledge Hammer',
  weapons: () => [Hammer],
  effects: () => ['Poltergeist Damage +', 'Dizzy vs. Poltergeist'],
  cards: () => [BlacksmithGod]
}
