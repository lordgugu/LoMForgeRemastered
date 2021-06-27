import { Weapon, WeaponProps } from 'model/Weapons'

export const Sword = new WeaponProps({
  kind: Weapon.Sword,
  sharpness: 32,
  weight: 32,
  force: 32,
  technique: 32,
  markerThreshold: 1,
  priceCoefficient: 50
})
