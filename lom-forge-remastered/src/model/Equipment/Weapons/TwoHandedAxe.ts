import { Leviathan } from 'model/Cards'
import { WeaponEquipment } from 'model/Equipment'
import { Jump, Thrust, Treefeller, Uppercut } from 'model/MasterMoves'

export const TwoHandedAxe: WeaponEquipment = {
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
