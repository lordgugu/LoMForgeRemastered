import { Jump, Thrust, Uppercut } from 'model/MasterMoves'
import { WeaponProps } from '.'

export const TwoHandedSword: WeaponProps = {
  originalName: '2H Sword',
  attributes: {
    sharpness: 40,
    weight: 40,
    force: 40,
    technique: 40
  },
  markerThreshold: 2,
  priceCoefficient: 75,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  }
}
