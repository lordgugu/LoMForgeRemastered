import { Jump, Thrust, Uppercut } from 'model/PlungeAttacks'
import { WeaponProps } from '.'

export const Knife: WeaponProps = {
  name: 'Knife',
  attributes: {
    sharpness: 44,
    weight: 16,
    force: 12,
    technique: 48
  },
  markerThreshold: 1,
  priceCoefficient: 45,
  plungeAttacks: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  }
}
