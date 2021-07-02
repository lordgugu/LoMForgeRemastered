import { WeaponProps } from 'model/Equipment'
import { Jump, Thrust, Uppercut } from 'model/MasterMoves'

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
  }
}
