import { BlacksmithGod } from 'model/Cards'
import { Hammer } from 'model/Equipment'
import { BottomSlotMasterMove } from 'model/MasterMoves'

export const SledgeHammer: BottomSlotMasterMove = {
  slot: 'Bottom',
  originalName: 'Sledge Hammer',
  weapons: () => [Hammer],
  effects: () => ['Poltergeist Damage +', 'Dizzy vs. Poltergeist'],
  cards: () => [BlacksmithGod]
}
