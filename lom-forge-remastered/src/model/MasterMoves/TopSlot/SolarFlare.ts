import { SunGod } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { MasterMove } from 'model/MasterMoves'

export const SolarFlare: MasterMove = {
  id: 'SolarFlare',
  name: 'Solar Flare',
  effects: () => ['Wisp Damage'],
  relatedWeapons: () => [Bow],
  relatedCards: () => [SunGod]
}
