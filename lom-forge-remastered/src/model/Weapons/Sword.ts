import { Jump, Thrust, Uppercut } from 'model/PlungeAttacks'
import { WeaponProps } from '.'

export const Sword: WeaponProps = {
  name: 'Sword',
  sharpness: 32,
  weight: 32,
  force: 32,
  technique: 32,
  markerThreshold: 1,
  priceCoefficient: 50,
  topPlunge: Thrust,
  middlePlunge: Uppercut,
  bottomPlunge: Jump
}
