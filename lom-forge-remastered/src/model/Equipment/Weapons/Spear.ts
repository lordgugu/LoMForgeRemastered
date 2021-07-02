import { WeaponProps } from 'model/Equipment'
import { Jump, Thrust, Uppercut } from 'model/MasterMoves'

export const Spear: WeaponProps = {
  originalName: 'Spear',
  attributes: {
    sharpness: 52,
    weight: 20,
    force: 24,
    technique: 48
  },
  markerThreshold: 2,
  priceCoefficient: 60,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  }
}
