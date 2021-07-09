import { GodOfWar, Wanderer } from 'model/Cards'
import { WeaponEquipment } from 'model/Equipment'
import { Jump, Woodchopper } from 'model/MasterMoves/BottomSlot'
import { Uppercut, DragonSlayer } from 'model/MasterMoves/MiddleSlot'
import { Thrust } from 'model/MasterMoves/TopSlot'

export const Axe: WeaponEquipment = {
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
