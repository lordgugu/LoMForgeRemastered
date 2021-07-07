import { GodOfWar, Wanderer } from 'model/Cards'
import { WeaponEquipment } from 'model/Equipment'
import { DragonSlayer, Jump, Thrust, Uppercut, Woodchopper } from 'model/MasterMoves'

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
