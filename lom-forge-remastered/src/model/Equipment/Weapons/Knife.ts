import { WeaponProps } from 'model/Equipment'
import { Jump, Thrust, Uppercut } from 'model/MasterMoves'

export const Knife: WeaponProps = {
  originalName: 'Knife',
  attributes: {
    sharpness: 44,
    weight: 16,
    force: 12,
    technique: 48
  },
  markerThreshold: 1,
  priceCoefficient: 45,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  }
}
