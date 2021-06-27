import { Jump, Thrust, Uppercut } from 'model/PlungeAttacks'
import { WeaponProps } from '.'

export const TwoHandedSword: WeaponProps = {
  name: '2H Sword',
  sharpness: 40,
  weight: 40,
  force: 40,
  technique: 40,
  markerThreshold: 2,
  priceCoefficient: 75,
  topPlunge: Thrust,
  middlePlunge: Uppercut,
  bottomPlunge: Jump
}
