import { Phoenix } from 'model/Cards'
import { ArmorEquipment } from 'model/Equipment'
import { Poison, Sleep } from 'model/Immunities'
import { CherryBombs, Citrisquid, CreepyEye, DangerousEye, LittleEye, PineOClock, SleepyEye } from 'model/Items'
import { ArmorProject } from 'model/Projects'
import { AutoRevive } from 'model/Specials'

export const Ring: ArmorEquipment = {
  id: 'Ring',
  name: 'Ring',
  attributes: {
    strike: 1,
    slash: 1,
    pierce: 1,
    magic: 16
  },
  markerThreshold: 1,
  priceCoefficient: 5,
  activate: activateRing,
  relatedSpecials: () => [AutoRevive],
  relatedItems: () => [Citrisquid, PineOClock, CherryBombs, LittleEye, SleepyEye, DangerousEye, CreepyEye],
  relatedImmunities: () => [Poison, Sleep],
  relatedCards: () => [Phoenix]
}

/**
 * When adding an item to a ring with the AutoRevive ability, if a Phoenix card is in the hidden slot or if no
 * Phoenix card is in a visible slot, the ability will be removed. This occurs before cards are pushed.
 *
 * @param project tempering project
 */
function activateRing(project: ArmorProject): void {
  const { special } = project
  const { hidden, top, middle, bottom } = project.mysticPowers

  if (special !== AutoRevive) {
    return
  }

  if (hidden === Phoenix || Array.of(top, middle, bottom).every((slot) => slot !== Phoenix)) {
    project.special = undefined
  }
}
