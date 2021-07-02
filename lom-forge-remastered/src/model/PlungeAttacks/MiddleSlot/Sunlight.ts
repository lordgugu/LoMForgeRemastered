import { SunGod } from 'model/Cards'
import { Sword } from 'model/Equipment'
import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'

export const Sunlight: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Sunlight',
  weapons: () => [Sword],
  effects: () => ['Undead Damage +', 'Flameburst vs. Undead'],
  cards: () => [SunGod]
}
