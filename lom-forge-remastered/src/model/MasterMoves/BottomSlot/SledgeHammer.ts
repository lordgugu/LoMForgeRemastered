import { BlacksmithGod } from 'model/Cards'
import { Hammer } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const SledgeHammer: MasterMove = {
  id: 'SledgeHammer',
  name: 'Sledge Hammer',
  effects: () => ['Poltergeist Damage +', 'Dizzy vs. Poltergeist'],
  relatedWeapons: () => [Hammer],
  relatedCards: () => [BlacksmithGod]
}
