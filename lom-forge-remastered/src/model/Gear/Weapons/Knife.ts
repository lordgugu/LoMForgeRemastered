import { BeastHeadedGod, LordOfFlies } from 'model/Cards/EvilGod'
import { Clown } from 'model/Cards/None'
import { Weapon } from 'model/Gear/Weapons'
import { Jump, SinisterBlade } from 'model/MasterMoves/BottomSlot'
import { PoisonBlade, QuickBlade, Uppercut } from 'model/MasterMoves/MiddleSlot'
import { Thrust } from 'model/MasterMoves/TopSlot'

export const Knife: Weapon = {
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
