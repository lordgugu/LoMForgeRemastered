import { Jump, Thrust, Uppercut } from 'model/PlungeAttacks'
import { WeaponProps } from '.'

export const Axe: WeaponProps = {
  name: 'Axe',
  attributes: {
    sharpness: 28,
    weight: 36,
    force: 48,
    technique: 16
  },
  markerThreshold: 2,
  priceCoefficient: 50,
  plungeAttacks: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  }
}
