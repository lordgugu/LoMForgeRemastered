import { Jump, Thrust, Uppercut } from 'model/PlungeAttacks'
import { WeaponProps } from '.'

export const Knife: WeaponProps = {
  name: 'Knife',
  sharpness: 44,
  weight: 16,
  force: 12,
  technique: 48,
  markerThreshold: 1,
  priceCoefficient: 45,
  topPlunge: Thrust,
  middlePlunge: Uppercut,
  bottomPlunge: Jump
}
