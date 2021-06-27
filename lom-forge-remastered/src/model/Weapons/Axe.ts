import { Weapon, WeaponProps } from 'model/Weapons'

export const Axe = new WeaponProps({
  kind: Weapon.Axe,
  sharpness: 28,
  weight: 36,
  force: 48,
  technique: 16,
  markerThreshold: 2,
  priceCoefficient: 50
})
