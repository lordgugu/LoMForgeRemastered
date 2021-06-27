import { SpecialAbility } from "model/SpecialAbilities";

export type ArmorProps = {
  name: string
  strike: number
  slash: number
  pierce: number
  magic: number
  markerThreshold: number
  priceCoefficient: number
  special?: SpecialAbility
}