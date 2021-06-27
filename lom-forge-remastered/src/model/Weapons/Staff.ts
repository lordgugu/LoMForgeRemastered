import { Jump, Thrust, Uppercut } from 'model/PlungeAttacks'
import { WeaponProps } from '.'

export const Staff: WeaponProps = {
  name: 'Staff',
  sharpness: 4,
  weight: 44,
  force: 16,
  technique: 32,
  markerThreshold: 1,
  priceCoefficient: 30,
  topPlunge: Thrust,
  middlePlunge: Uppercut,
  bottomPlunge: Jump
}
