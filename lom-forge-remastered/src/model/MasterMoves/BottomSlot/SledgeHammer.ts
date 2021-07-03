import { BlacksmithGod } from 'model/Cards'
import { Hammer } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const SledgeHammer: MasterMove = {
  originalName: 'Sledge Hammer',
  weapons: () => [Hammer],
  effects: () => ['Poltergeist Damage +', 'Dizzy vs. Poltergeist'],
  cards: () => [BlacksmithGod]
}
