import { Jump, Thrust, Uppercut } from 'model/PlungeAttacks'
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
  plungeAttacks: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  }
}
