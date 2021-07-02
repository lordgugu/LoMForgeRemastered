import { WeaponProps } from 'model/Equipment'
import { DoubleShot, Jump, Shot } from 'model/MasterMoves'

export const Bow: WeaponProps = {
  originalName: 'Bow',
  attributes: {
    sharpness: 40,
    weight: 4,
    force: 20,
    technique: 40
  },
  markerThreshold: 1,
  priceCoefficient: 35,
  masterMoves: {
    top: Shot,
    middle: DoubleShot,
    bottom: Jump
  }
}
