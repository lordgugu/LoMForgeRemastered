import { King } from 'model/Cards'
import { WeaponEquipment } from 'model/Equipment'
import { Jump } from 'model/MasterMoves/BottomSlot'
import { Uppercut, HandOfMidas } from 'model/MasterMoves/MiddleSlot'
import { Thrust } from 'model/MasterMoves/TopSlot'

export const Glove: WeaponEquipment = {
  id: 'Glove',
  name: 'Glove',
  attributes: {
    sharp: 0,
    heavy: 32,
    force: 24,
    tech: 56
  },
  markerThreshold: 2,
  priceCoefficient: 40,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  relatedMasterMoves: {
    top: () => [Thrust],
    middle: () => [Uppercut, HandOfMidas],
    bottom: () => [Jump]
  },
  relatedCards: () => [King]
}
