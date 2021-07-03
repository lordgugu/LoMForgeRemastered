import { MotherOfGods } from 'model/Cards'
import { WeaponProps } from 'model/Equipment'
import { GameOfDeath, GreenPrincess, Jump, RedDream, Thrust, Uppercut } from 'model/MasterMoves'

export const Flail: WeaponProps = {
  originalName: 'Flail',
  attributes: {
    sharpness: 0,
    weight: 40,
    force: 28,
    technique: 44
  },
  markerThreshold: 3,
  priceCoefficient: 40,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  compatibleMasterMoves: {
    top: () => [Thrust, GreenPrincess],
    middle: () => [Uppercut, GameOfDeath],
    bottom: () => [Jump, RedDream]
  },
  relatedCards: () => [MotherOfGods]
}
