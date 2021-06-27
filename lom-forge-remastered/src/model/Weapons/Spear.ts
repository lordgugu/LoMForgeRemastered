import { Jump, Thrust, Uppercut } from 'model/PlungeAttacks'
import { WeaponProps } from '.'

export const Spear: WeaponProps = {
  name: 'Spear',
  sharpness: 52,
  weight: 20,
  force: 24,
  technique: 48,
  markerThreshold: 2,
  priceCoefficient: 60,
  topPlunge: Thrust,
  middlePlunge: Uppercut,
  bottomPlunge: Jump
}
