import { Weapon, WeaponProps } from 'model/Weapons'

export const Flail = new WeaponProps({
  kind: Weapon.Flail,
  sharpness: 0,
  weight: 40,
  force: 28,
  technique: 44,
  markerThreshold: 3,
  priceCoefficient: 40
})
