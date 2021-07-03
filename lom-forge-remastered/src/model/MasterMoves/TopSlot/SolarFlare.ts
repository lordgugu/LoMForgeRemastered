import { SunGod } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const SolarFlare: MasterMove = {
  originalName: 'Solar Flare',
  weapons: () => [Bow],
  effects: () => ['Wisp Damage'],
  cards: () => [SunGod]
}
