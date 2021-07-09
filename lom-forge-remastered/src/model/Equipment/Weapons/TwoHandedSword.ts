import { FallenAngel, Ragnarok as RagnarokCard } from 'model/Cards'
import { Weapon } from 'model/Equipment/Weapons'
import { Jump, Ragnarok } from 'model/MasterMoves/BottomSlot'
import { Uppercut } from 'model/MasterMoves/MiddleSlot'
import { ChaoticAvenger, Thrust } from 'model/MasterMoves/TopSlot'

export const TwoHandedSword: Weapon = {
  id: 'TwoHandedSword',
  name: '2H Sword',
  attributes: {
    sharp: 40,
    heavy: 40,
    force: 40,
    tech: 40
  },
  markerThreshold: 2,
  priceCoefficient: 75,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  relatedMasterMoves: {
    top: () => [Thrust, ChaoticAvenger],
    middle: () => [Uppercut],
    bottom: () => [Jump, Ragnarok]
  },
  relatedCards: () => [FallenAngel, RagnarokCard]
}
