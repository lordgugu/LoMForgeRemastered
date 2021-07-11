import { SunGod } from 'model/Cards/HeavenGod'
import { Bow } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const SolarFlare: MasterMove = {
  id: 'SolarFlare',
  name: 'Solar Flare',
  slot: 'top',
  effects: () => ['Wisp Damage'],
  relatedWeapons: () => [Bow],
  relatedCards: () => [SunGod]
}
