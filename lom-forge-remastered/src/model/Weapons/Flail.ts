import { Jump, Thrust, Uppercut } from 'model/PlungeAttacks'
import { WeaponProps } from '.'

export const Flail: WeaponProps = {
  name: 'Flail',
  sharpness: 0,
  weight: 40,
  force: 28,
  technique: 44,
  markerThreshold: 3,
  priceCoefficient: 40,
  topPlunge: Thrust,
  middlePlunge: Uppercut,
  bottomPlunge: Jump
}