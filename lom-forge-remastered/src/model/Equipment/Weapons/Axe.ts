import { GodOfWar, Wanderer } from 'model/Cards'
import { WeaponProps } from 'model/Equipment'
import { DragonSlayer, Jump, Thrust, Uppercut, Woodchopper } from 'model/MasterMoves'

export const Axe: WeaponProps = {
  originalName: 'Axe',
  attributes: {
    sharpness: 28,
    weight: 36,
    force: 48,
    technique: 16
  },
  markerThreshold: 2,
  priceCoefficient: 50,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  compatibleMasterMoves: {
    top: () => [Thrust],
    middle: () => [Uppercut, DragonSlayer],
    bottom: () => [Jump, Woodchopper]
  },
  relatedCards: () => [GodOfWar, Wanderer]
}
