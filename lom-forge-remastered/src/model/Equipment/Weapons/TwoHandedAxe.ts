import { Leviathan } from 'model/Cards'
import { WeaponProps } from 'model/Equipment'
import { Jump, Thrust, Treefeller, Uppercut } from 'model/MasterMoves'

export const TwoHandedAxe: WeaponProps = {
  originalName: '2H Axe',
  attributes: {
    sharpness: 40,
    weight: 40,
    force: 64,
    technique: 16
  },
  markerThreshold: 3,
  priceCoefficient: 75,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  compatibleMasterMoves: {
    top: () => [Thrust],
    middle: () => [Uppercut],
    bottom: () => [Jump, Treefeller]
  },
  relatedCards: () => [Leviathan]
}
