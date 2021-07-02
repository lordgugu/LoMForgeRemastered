import { WeaponProps } from 'model/Equipment'
import { Jump, Thrust, Uppercut } from 'model/MasterMoves'

export const Sword: WeaponProps = {
  originalName: 'Sword',
  attributes: {
    sharpness: 32,
    weight: 32,
    force: 32,
    technique: 32
  },
  markerThreshold: 1,
  priceCoefficient: 50,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  }
}
