import { WingsOfDarkness } from 'model/Cards/EvilGod'
import { Staff } from 'model/Gear/Weapons'
import { MasterMove } from 'model/MasterMoves'

export const GoldenTouch: MasterMove = {
  id: 'GoldenTouch',
  name: 'Golden Touch',
  slot: 'bottom',
  effects: () => ['Experience &rarr; Lucre', 'Attack Gauge &minus;'],
  relatedWeapons: () => [Staff],
  relatedCards: () => [WingsOfDarkness]
}
