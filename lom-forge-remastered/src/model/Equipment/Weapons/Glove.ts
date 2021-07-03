import { King } from 'model/Cards'
import { WeaponProps } from 'model/Equipment'
import { HandOfMidas, Jump, Thrust, Uppercut } from 'model/MasterMoves'

export const Glove: WeaponProps = {
  originalName: 'Glove',
  attributes: {
    sharpness: 0,
    weight: 32,
    force: 24,
    technique: 56
  },
  markerThreshold: 2,
  priceCoefficient: 40,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  compatibleMasterMoves: {
    top: () => [Thrust],
    middle: () => [Uppercut, HandOfMidas],
    bottom: () => [Jump]
  },
  relatedCards: () => [King]
}
