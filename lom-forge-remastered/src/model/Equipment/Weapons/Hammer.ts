import { BlacksmithGod, SpiritOfMountain, ThunderGod, Volcano } from 'model/Cards'
import { WeaponProps } from 'model/Equipment'
import { Jump, MagmaHammer, Mjolnir, QuakeHammer, SledgeHammer, Thrust, Uppercut } from 'model/MasterMoves'

export const Hammer: WeaponProps = {
  originalName: 'Hammer',
  attributes: {
    sharpness: 8,
    weight: 72,
    force: 64,
    technique: 16
  },
  markerThreshold: 3,
  priceCoefficient: 75,
  masterMoves: {
    top: Thrust,
    middle: Uppercut,
    bottom: Jump
  },
  compatibleMasterMoves: {
    top: () => [Thrust],
    middle: () => [Uppercut],
    bottom: () => [Jump, MagmaHammer, Mjolnir, QuakeHammer, SledgeHammer]
  },
  relatedCards: () => [Volcano, ThunderGod, SpiritOfMountain, BlacksmithGod]
}
