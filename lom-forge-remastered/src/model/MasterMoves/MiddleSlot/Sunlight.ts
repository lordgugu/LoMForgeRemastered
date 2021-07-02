import { SunGod } from 'model/Cards'
import { Sword } from 'model/Equipment'
import { MiddleSlotMasterMove } from 'model/MasterMoves'

export const Sunlight: MiddleSlotMasterMove = {
  slot: 'Middle',
  originalName: 'Sunlight',
  weapons: () => [Sword],
  effects: () => ['Undead Damage +', 'Flameburst vs. Undead'],
  cards: () => [SunGod]
}
