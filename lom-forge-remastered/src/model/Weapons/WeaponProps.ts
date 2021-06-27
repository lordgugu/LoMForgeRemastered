import { BottomSlotPlungeAttack, MiddleSlotPlungeAttack, TopSlotPlungeAttack } from 'model/PlungeAttacks'

export type WeaponProps = {
  name: string
  sharpness: number
  weight: number
  force: number
  technique: number
  markerThreshold: number
  priceCoefficient: number
  topPlunge: TopSlotPlungeAttack
  middlePlunge: MiddleSlotPlungeAttack
  bottomPlunge: BottomSlotPlungeAttack
}
