import { Jump, Thrust, Uppercut } from 'model/PlungeAttacks'
import { WeaponProps } from '.'

export const Glove: WeaponProps = {
  id: 9,
  originalName: 'Glove',
  attributes: {
    sharpness: 0,
    weight: 32,
    force: 24,
    technique: 56
  },
  markerThreshold: 2,
  priceCoefficient: 40,
  plungeAttacks: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  }
}
