import { WeaponProps } from 'model/Equipment'
import { Jump, Thrust, Uppercut } from 'model/MasterMoves'

export const Hammer: WeaponProps = {
  originalName: 'Hammer',
  attributes: {
    sharpness: 8,
    weight: 72,
    force: 64,
    technique: 16
  },
  markerThreshold: 3,
  priceCoefficient: 75,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  }
}
