import { ManOfValor, OceanGod, RulerOfTheSky } from 'model/Cards'
import { WeaponEquipment } from 'model/Equipment'
import { Gungnir, Jump, SpearOfLight, Thrust, Trident, Uppercut } from 'model/MasterMoves'

export const Spear: WeaponEquipment = {
  id: 'Spear',
  name: 'Spear',
  attributes: {
    sharp: 52,
    heavy: 20,
    force: 24,
    tech: 48
  },
  markerThreshold: 2,
  priceCoefficient: 60,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  relatedMasterMoves: {
    top: () => [Thrust, Gungnir, SpearOfLight, Trident],
    middle: () => [Uppercut],
    bottom: () => [Jump]
  },
  relatedCards: () => [RulerOfTheSky, ManOfValor, OceanGod]
}
