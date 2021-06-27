import { Jump, Thrust, Uppercut } from 'model/PlungeAttacks'
import { WeaponProps } from '.'

export const Hammer: WeaponProps = {
  name: 'Hammer',
  sharpness: 8,
  weight: 72,
  force: 64,
  technique: 16,
  markerThreshold: 3,
  priceCoefficient: 75,
  topPlunge: Thrust,
  middlePlunge: Uppercut,
  bottomPlunge: Jump
}
