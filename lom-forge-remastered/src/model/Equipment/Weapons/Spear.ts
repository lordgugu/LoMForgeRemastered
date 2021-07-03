import { ManOfValor, OceanGod, RulerOfTheSky } from 'model/Cards'
import { WeaponProps } from 'model/Equipment'
import { Gungnir, Jump, SpearOfLight, Thrust, Trident, Uppercut } from 'model/MasterMoves'

export const Spear: WeaponProps = {
  originalName: 'Spear',
  attributes: {
    sharpness: 52,
    weight: 20,
    force: 24,
    technique: 48
  },
  markerThreshold: 2,
  priceCoefficient: 60,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  compatibleMasterMoves: {
    top: () => [Thrust, Gungnir, SpearOfLight, Trident],
    middle: () => [Uppercut],
    bottom: () => [Jump]
  },
  relatedCards: () => [RulerOfTheSky, ManOfValor, OceanGod]
}
