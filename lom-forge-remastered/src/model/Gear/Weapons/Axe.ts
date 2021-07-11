import { Wanderer } from 'model/Cards'
import { GodOfWar } from 'model/Cards/HeavenGod'
import { Weapon } from 'model/Gear/Weapons'
import { Jump, Woodchopper } from 'model/MasterMoves/BottomSlot'
import { DragonSlayer, Uppercut } from 'model/MasterMoves/MiddleSlot'
import { Thrust } from 'model/MasterMoves/TopSlot'

export const Axe: Weapon = {
  id: 'Axe',
  name: 'Axe',
  attributes: {
    sharp: 28,
    heavy: 36,
    force: 48,
    tech: 16
  },
  markerThreshold: 2,
  priceCoefficient: 50,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  relatedMasterMoves: {
    top: () => [Thrust],
    middle: () => [Uppercut, DragonSlayer],
    bottom: () => [Jump, Woodchopper]
  },
  relatedCards: () => [GodOfWar, Wanderer]
}
