import { Weapon, WeaponProps } from 'model/Weapons'

export const Knife = new WeaponProps({
  kind: Weapon.Knife,
  sharpness: 44,
  weight: 16,
  force: 12,
  technique: 48,
  markerThreshold: 1,
  priceCoefficient: 45
})
