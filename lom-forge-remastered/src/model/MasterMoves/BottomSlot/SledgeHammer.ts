import { BlacksmithGod } from 'model/Cards/HeavenGod'
import { Hammer } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const SledgeHammer: MasterMove = {
  id: 'SledgeHammer',
  name: 'Sledge Hammer',
  slot: 'bottom',
  effects: () => ['Poltergeist Damage +', 'Dizzy vs. Poltergeist'],
  relatedWeapons: () => [Hammer],
  relatedCards: () => [BlacksmithGod]
}
