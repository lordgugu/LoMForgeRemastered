import { Jump, Thrust, Uppercut } from 'model/PlungeAttacks'
import { WeaponProps } from '.'

export const Hammer: WeaponProps = {
  id: 6,
  originalName: 'Hammer',
  attributes: {
    sharpness: 8,
    weight: 72,
    force: 64,
    technique: 16
  },
  markerThreshold: 3,
  priceCoefficient: 75,
  plungeAttacks: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  }
}
