import { Leviathan } from 'model/Cards'
import { Weapon } from 'model/Gear/Weapons'
import { Jump, Treefeller } from 'model/MasterMoves/BottomSlot'
import { Uppercut } from 'model/MasterMoves/MiddleSlot'
import { Thrust } from 'model/MasterMoves/TopSlot'

export const TwoHandedAxe: Weapon = {
  id: 'TwoHandedAxe',
  name: '2H Axe',
  attributes: {
    sharp: 40,
    heavy: 40,
    force: 64,
    tech: 16
  },
  markerThreshold: 3,
  priceCoefficient: 75,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  relatedMasterMoves: {
    top: () => [Thrust],
    middle: () => [Uppercut],
    bottom: () => [Jump, Treefeller]
  },
  relatedCards: () => [Leviathan]
}
