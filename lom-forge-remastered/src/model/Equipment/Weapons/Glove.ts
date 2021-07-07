import { King } from 'model/Cards'
import { WeaponEquipment } from 'model/Equipment'
import { HandOfMidas, Jump, Thrust, Uppercut } from 'model/MasterMoves'

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
