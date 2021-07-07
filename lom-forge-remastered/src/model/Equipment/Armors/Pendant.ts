import { Clown, Phoenix } from 'model/Cards'
import { ArmorEquipment } from 'model/Equipment'
import { Confusion, Darkness, Paralysis, Poison, Sleep } from 'model/Immunities'
import {
  AromaOil,
  BlackenedBat,
  Citrisquid,
  CreepyEye,
  DangerousEye,
  LittleEye,
  MothWing,
  PineOClock,
  SleepyEye,
  StinkyBreath
} from 'model/Items'
import { ArmorProject } from 'model/Projects'
import { AutoRevive } from 'model/Specials'

export const Pendant: ArmorEquipment = {
  id: 'Pendant',
  name: 'Pendant',
  attributes: {
    strike: 0,
    slash: 0,
    pierce: 0,
    magic: 24
  },
  markerThreshold: 1,
  priceCoefficient: 5,
  activate: activatePendant,
  relatedSpecials: () => [AutoRevive],
  relatedItems: () => [
    Citrisquid,
    PineOClock,
    LittleEye,
    SleepyEye,
    DangerousEye,
    CreepyEye,
    MothWing,
    AromaOil,
    StinkyBreath,
    BlackenedBat
  ],
  relatedImmunities: () => [Poison, Sleep, Paralysis, Confusion, Darkness],
  relatedCards: () => [Phoenix, Clown]
}

/**
 * When adding an item to a pendant with the AutoRevive ability, if a Phoenix card is in the hidden slot or if no
 * Phoenix card is in a visible slot, the ability will be removed. This occurs before cards are pushed.
 *
 * @param project tempering project
 */
function activatePendant(project: ArmorProject): void {
  const { special } = project
  const { hidden, top, middle, bottom } = project.cards

  if (special !== AutoRevive) {
    return
  }

  if (hidden === Phoenix || !Array.of(top, middle, bottom).includes(Phoenix)) {
    project.special = undefined
  }
}
