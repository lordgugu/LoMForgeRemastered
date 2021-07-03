import { GodOfDestruction, MoonGoddess, SunGod, WitchOfMoon } from 'model/Cards'
import { WeaponProps } from 'model/Equipment'
import { FlameTongue, Jump, Moonlight, Sunlight, Thrust, Uppercut, Vampsword } from 'model/MasterMoves'

export const Sword: WeaponProps = {
  originalName: 'Sword',
  attributes: {
    sharpness: 32,
    weight: 32,
    force: 32,
    technique: 32
  },
  markerThreshold: 1,
  priceCoefficient: 50,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  compatibleMasterMoves: {
    top: () => [Thrust, FlameTongue, Sunlight, Vampsword],
    middle: () => [Uppercut, Moonlight],
    bottom: () => [Jump]
  },
  relatedCards: () => [GodOfDestruction, SunGod, WitchOfMoon, MoonGoddess]
}
