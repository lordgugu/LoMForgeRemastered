import { WeaponProps } from 'model/Equipment'
import { Jump, Thrust, Uppercut } from 'model/MasterMoves'

export const Flail: WeaponProps = {
  originalName: 'Flail',
  attributes: {
    sharpness: 0,
    weight: 40,
    force: 28,
    technique: 44
  },
  markerThreshold: 3,
  priceCoefficient: 40,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  }
}
