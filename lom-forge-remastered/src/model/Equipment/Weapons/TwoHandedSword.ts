import { FallenAngel, Ragnarok as RagnarokCard } from 'model/Cards'
import { WeaponEquipment } from 'model/Equipment'
import { ChaoticAvenger, Jump, Ragnarok, Thrust, Uppercut } from 'model/MasterMoves'

export const TwoHandedSword: WeaponEquipment = {
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
