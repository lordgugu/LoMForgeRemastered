import { Jump, Thrust, Uppercut } from 'model/PlungeAttacks'
import { WeaponProps } from '.'

export const TwoHandedAxe: WeaponProps = {
  name: '2H Axe',
  sharpness: 40,
  weight: 40,
  force: 64,
  technique: 16,
  markerThreshold: 3,
  priceCoefficient: 75,
  topPlunge: Thrust,
  middlePlunge: Uppercut,
  bottomPlunge: Jump
}
