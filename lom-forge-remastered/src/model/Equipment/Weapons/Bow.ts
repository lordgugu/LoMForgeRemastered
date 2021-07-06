import { MoonGoddess, Raven, Sage, SpiritOfForest, SunGod, Witch, Wolf } from 'model/Cards'
import { WeaponEquipment } from 'model/Equipment'
import {
  AngryEye,
  Apricat,
  BlankEye,
  Citrisquid,
  ClearFeather,
  DragonsBreath,
  GiantsHorn,
  GoldClover,
  MaskedPotato,
  Needlettuce,
  PeachPuppy,
  PoisonFang,
  Rhinoloupe,
  Scissors,
  SharpClaw,
  SillyEye,
  SpadeBasil,
  SpinyCarrot,
  WickedEye
} from 'model/Items'
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
import { WeaponProject } from 'model/Projects'

export const Bow: WeaponEquipment = {
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
  relatedItems: () => [
    Apricat,
    Citrisquid,
    PeachPuppy,
    Rhinoloupe,
    SpinyCarrot,
    Needlettuce,
    MaskedPotato,
    SpadeBasil,
    GoldClover,
    SharpClaw,
    PoisonFang,
    GiantsHorn,
    Scissors,
    SillyEye,
    AngryEye,
    BlankEye,
    WickedEye,
    ClearFeather,
    DragonsBreath
  ],
  relatedCards: () => [Raven, Witch, Wolf, Sage, SunGod, SpiritOfForest, MoonGoddess]
}

/**
 * Because this happens before all cards are pushed, in order to gain the Magical Shot, you need to temper an item
 * AFTER the Witch, Raven, and Wolf cards have been pushed into view.
 *
 * @param project tempering project
 */
function activateBow(project: WeaponProject) {
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
