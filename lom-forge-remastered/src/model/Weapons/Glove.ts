import { Jump, Thrust, Uppercut } from 'model/PlungeAttacks'
import { WeaponProps } from '.'

export const Glove: WeaponProps = {
  name: "Glove",
  sharpness: 0,
  weight: 32,
  force: 24,
  technique: 56,
  markerThreshold: 2,
  priceCoefficient: 40,
  topPlunge: Thrust,
  middlePlunge: Uppercut,
  bottomPlunge: Jump
}