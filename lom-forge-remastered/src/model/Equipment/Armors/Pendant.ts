import { Phoenix } from 'model/Cards'
import { ArmorProps } from 'model/Equipment'
import { ArmorProjectProps } from 'model/Projects'
import { AutoRevive } from 'model/SpecialAbilities'

export const Pendant: ArmorProps = {
  originalName: 'Pendant',
  attributes: {
    strike: 0,
    slash: 0,
    pierce: 0,
    magic: 24
  },
  markerThreshold: 1,
  priceCoefficient: 5,
  compatibleSpecials: () => [AutoRevive],
  activate: activationCode,
  relatedCards: () => [Phoenix]
}

/**
 * When adding an item to a pendant with the AutoRevive ability, if a Phoenix card is in the hidden slot or if no
 * Phoenix card is in a visible slot, the ability will be removed. This occurs before cards are pushed.
 *
 * @param project tempering project
 */
function activationCode(project: ArmorProjectProps): void {
  if (project.special !== AutoRevive) {
    return
  }

  if (project.mysticPowers.hidden === Phoenix) {
    project.special = undefined
    return
  }

  const visibleSlots = [project.mysticPowers.top, project.mysticPowers.middle, project.mysticPowers.bottom]

  if (visibleSlots.some((slot) => slot === Phoenix)) {
    return
  }

  project.special = undefined
}
