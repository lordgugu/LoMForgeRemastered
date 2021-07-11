import { Raven, Sage, SpiritOfForest, Witch, Wolf } from 'model/Cards'
import { MoonGoddess, SunGod } from 'model/Cards/HeavenGod'
import { ActiveWeapon } from 'model/Gear/Weapons'
import { Jump } from 'model/MasterMoves/BottomSlot'
import { DoubleShot, ElvenArcher, LunarShot } from 'model/MasterMoves/MiddleSlot'
import {
  FlamingArrow,
  Icicle,
  MagicalShot,
  MedusaArrow,
  PhoenixFalling,
  Shot,
  SolarFlare
} from 'model/MasterMoves/TopSlot'
import { TemperedWeapon } from 'model/Projects'

export const Bow: ActiveWeapon = {
  id: 'Bow',
  name: 'Bow',
  attributes: {
    sharp: 40,
    heavy: 4,
    force: 20,
    tech: 40
  },
  markerThreshold: 1,
  priceCoefficient: 35,
  masterMoves: {
    top: Shot,
    middle: DoubleShot,
    bottom: Jump
  },
  activate: activateBow,
  relatedMasterMoves: {
    top: () => [Shot, FlamingArrow, Icicle, MagicalShot, MedusaArrow, PhoenixFalling, SolarFlare],
    middle: () => [DoubleShot, ElvenArcher, LunarShot],
    bottom: () => [Jump]
  },
  relatedCards: () => [Raven, Witch, Wolf, Sage, SunGod, SpiritOfForest, MoonGoddess]
}

/**
 * Because this happens before all cards are pushed, in order to gain the Magical Shot, you need to temper an item
 * AFTER the Witch, Raven, and Wolf cards have been pushed into view.
 *
 * @param project tempering project
 */
function activateBow(project: TemperedWeapon) {
  const { top, middle, bottom } = project.cards

  let witch = false
  let raven = false
  let wolf = false

  Array.of(top, middle, bottom).forEach((slot) => {
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
