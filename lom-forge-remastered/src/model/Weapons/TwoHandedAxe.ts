import { Weapon, WeaponProps } from 'model/Weapons'

export const TwoHandedAxe = new WeaponProps({
  kind: Weapon.TwoHandedAxe,
  sharpness: 40,
  weight: 40,
  force: 64,
  technique: 16,
  markerThreshold: 3,
  priceCoefficient: 75
})
