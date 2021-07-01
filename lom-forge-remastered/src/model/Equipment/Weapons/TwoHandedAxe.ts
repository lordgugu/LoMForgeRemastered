import { Jump, Thrust, Uppercut } from 'model/PlungeAttacks'
import { WeaponProps } from '.'

export const TwoHandedAxe: WeaponProps = {
  originalName: '2H Axe',
  attributes: {
    sharpness: 40,
    weight: 40,
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
