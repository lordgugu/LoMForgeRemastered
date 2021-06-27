import { Weapon, WeaponProps } from 'model/Weapons'

export const Spear = new WeaponProps({
  kind: Weapon.Spear,
  sharpness: 52,
  weight: 20,
  force: 24,
  technique: 48,
  markerThreshold: 2,
  priceCoefficient: 60
})
