import { Weapon, WeaponProps } from 'model/Weapons'

export const Glove = new WeaponProps({
  kind: Weapon.Glove,
  sharpness: 0,
  weight: 32,
  force: 24,
  technique: 56,
  markerThreshold: 2,
  priceCoefficient: 40
})
