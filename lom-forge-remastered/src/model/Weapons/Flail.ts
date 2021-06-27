import { Jump, Thrust, Uppercut } from 'model/PlungeAttacks'
import { WeaponProps } from '.'

export const Flail: WeaponProps = {
  name: 'Flail',
  attributes: {
    sharpness: 0,
    weight: 40,
    force: 28,
    technique: 44
  },
  markerThreshold: 3,
  priceCoefficient: 40,
  plungeAttacks: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  }
}
