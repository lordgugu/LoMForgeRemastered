import { BeastHeadedGod, Clown, LordOfFlies } from 'model/Cards'
import { WeaponEquipment } from 'model/Equipment'
import { Jump, PoisonBlade, QuickBlade, SinisterBlade, Thrust, Uppercut } from 'model/MasterMoves'

export const Knife: WeaponEquipment = {
  id: 'Knife',
  name: 'Knife',
  attributes: {
    sharp: 44,
    heavy: 16,
    force: 12,
    tech: 48
  },
  markerThreshold: 1,
  priceCoefficient: 45,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  relatedMasterMoves: {
    top: () => [Thrust],
    middle: () => [Uppercut, PoisonBlade, QuickBlade],
    bottom: () => [Jump, SinisterBlade]
  },
  relatedCards: () => [BeastHeadedGod, Clown, LordOfFlies]
}
