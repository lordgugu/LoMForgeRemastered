import { DoubleShot, Shot } from 'model/PlungeAttacks'
import { Weapon, WeaponProps } from 'model/Weapons'

export const Bow = new WeaponProps({
  kind: Weapon.Bow,
  sharpness: 40,
  weight: 4,
  force: 20,
  technique: 40,
  markerThreshold: 1,
  priceCoefficient: 35,
  topPlunge: Shot,
  middlePlunge: DoubleShot
})
