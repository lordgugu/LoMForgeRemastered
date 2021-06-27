import { DoubleShot, Jump, Shot } from 'model/PlungeAttacks'
import { WeaponProps } from '.'

export const Bow: WeaponProps = {
  name: 'Bow',
  attributes: {
    sharpness: 40,
    weight: 4,
    force: 20,
    technique: 40
  },
  markerThreshold: 1,
  priceCoefficient: 35,
  plungeAttacks: {
    top: Shot,
    middle: DoubleShot,
    bottom: Jump
  }
}
