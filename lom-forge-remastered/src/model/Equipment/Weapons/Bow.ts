import { MoonGoddess, Raven, Sage, SpiritOfForest, SunGod, Witch, Wolf } from 'model/Cards'
import { WeaponProps } from 'model/Equipment'
import {
  DoubleShot,
  ElvenArcher,
  FlamingArrow,
  Icicle,
  Jump,
  LunarShot,
  MagicalShot,
  MedusaArrow,
  PhoenixFalling,
  Shot,
  SolarFlare
} from 'model/MasterMoves'
import { WeaponProjectProps } from 'model/Projects'

export const Bow: WeaponProps = {
  originalName: 'Bow',
  attributes: {
    sharpness: 40,
    weight: 4,
    force: 20,
    technique: 40
  },
  markerThreshold: 1,
  priceCoefficient: 35,
  masterMoves: {
    top: Shot,
    middle: DoubleShot,
    bottom: Jump
  },
  compatibleMasterMoves: {
    top: () => [Shot, FlamingArrow, Icicle, MagicalShot, MedusaArrow, PhoenixFalling, SolarFlare],
    middle: () => [DoubleShot, ElvenArcher, LunarShot],
    bottom: () => [Jump]
  },
  activate: activationCode,
  relatedCards: () => [Raven, Witch, Wolf, Sage, SunGod, SpiritOfForest, MoonGoddess]
}

/**
 * Because this happens before all cards are pushed, in order to gain the Magical Shot, you need to temper an item
 * AFTER the Witch, Raven, and Wolf cards have been pushed into view.
 *
 * @param project tempering project
 */
function activationCode(project: WeaponProjectProps) {
  let witch = false
  let raven = false
  let wolf = false

  const slots = [project.mysticPowers.top, project.mysticPowers.middle, project.mysticPowers.bottom]

  slots.forEach((slot) => {
    switch (slot) {
      case Witch:
        witch = true
        break
      case Raven:
        raven = true
        break
      case Wolf:
        wolf = true
        break
      default:
        return
    }
  })

  if (witch && raven && wolf) {
    project.masterMoves.top = MagicalShot
  }
}
