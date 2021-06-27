import { Weapon, WeaponProps } from 'model/Weapons'

export const Staff = new WeaponProps({
  kind: Weapon.Staff,
  sharpness: 4,
  weight: 44,
  force: 16,
  technique: 32,
  markerThreshold: 1,
  priceCoefficient: 30
})
