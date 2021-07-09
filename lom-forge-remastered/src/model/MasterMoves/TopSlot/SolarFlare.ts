import { SunGod } from 'model/Cards'
import { Bow } from 'model/Equipment/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const SolarFlare: MasterMove = {
  id: 'SolarFlare',
  name: 'Solar Flare',
  slot: 'top',
  effects: () => ['Wisp Damage'],
  relatedWeapons: () => [Bow],
  relatedCards: () => [SunGod]
}
