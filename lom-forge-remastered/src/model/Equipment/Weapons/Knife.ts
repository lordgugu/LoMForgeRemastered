import { BeastHeadedGod, Clown, LordOfFlies } from 'model/Cards'
import { WeaponProps } from 'model/Equipment'
import { Jump, PoisonBlade, QuickBlade, SinisterBlade, Thrust, Uppercut } from 'model/MasterMoves'

export const Knife: WeaponProps = {
  originalName: 'Knife',
  attributes: {
    sharpness: 44,
    weight: 16,
    force: 12,
    technique: 48
  },
  markerThreshold: 1,
  priceCoefficient: 45,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  compatibleMasterMoves: {
    top: () => [Thrust],
    middle: () => [Uppercut, PoisonBlade, QuickBlade],
    bottom: () => [Jump, SinisterBlade]
  },
  relatedCards: () => [BeastHeadedGod, Clown, LordOfFlies]
}
