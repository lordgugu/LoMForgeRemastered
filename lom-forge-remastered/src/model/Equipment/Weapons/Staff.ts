import { Cleric, RulerOfTheSky, WindGod, WingsOfDarkness } from 'model/Cards'
import { WeaponProps } from 'model/Equipment'
import { Caduceus, Demonicide, Electrosceptre, GoldenTouch, Jump, Thrust, Uppercut } from 'model/MasterMoves'

export const Staff: WeaponProps = {
  originalName: 'Staff',
  attributes: {
    sharpness: 4,
    weight: 44,
    force: 16,
    technique: 32
  },
  markerThreshold: 1,
  priceCoefficient: 30,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  compatibleMasterMoves: {
    top: () => [Thrust, Caduceus],
    middle: () => [Uppercut],
    bottom: () => [Jump, Demonicide, Electrosceptre, GoldenTouch]
  },
  relatedCards: () => [WindGod, Cleric, RulerOfTheSky, WingsOfDarkness]
}
