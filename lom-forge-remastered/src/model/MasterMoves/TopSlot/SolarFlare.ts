import { SunGod } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { TopSlotMasterMove } from 'model/MasterMoves'

export const SolarFlare: TopSlotMasterMove = {
  slot: 'Top',
  originalName: 'Solar Flare',
  weapons: () => [Bow],
  effects: () => ['Wisp Damage'],
  cards: () => [SunGod]
}
