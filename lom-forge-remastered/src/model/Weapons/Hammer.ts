import { Weapon, WeaponProps } from 'model/Weapons'

export const Hammer = new WeaponProps({
  kind: Weapon.Hammer,
  sharpness: 8,
  weight: 72,
  force: 64,
  technique: 16,
  markerThreshold: 3,
  priceCoefficient: 75
})
