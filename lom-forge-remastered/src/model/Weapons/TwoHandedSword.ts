import { Weapon, WeaponProps } from 'model/Weapons'

export const TwoHandedSword = new WeaponProps({
  kind: Weapon.TwoHandedSword,
  sharpness: 40,
  weight: 40,
  force: 40,
  technique: 40,
  markerThreshold: 2,
  priceCoefficient: 75
})
