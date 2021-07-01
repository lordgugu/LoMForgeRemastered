import { Jump, Thrust, Uppercut } from 'model/PlungeAttacks'
import { WeaponProps } from '.'

export const Staff: WeaponProps = {
  originalName: 'Staff',
  attributes: {
    sharpness: 4,
    weight: 44,
    force: 16,
    technique: 32
  },
  markerThreshold: 1,
  priceCoefficient: 30,
  plungeAttacks: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  }
}
