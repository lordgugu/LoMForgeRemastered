import { FertilityGoddess, OceanGod, Phoenix } from 'model/Cards'
import { ArmorEquipment } from 'model/Equipment'
import { Confusion, Flameburst, Petrification, Poison, Sleep } from 'model/Immunities'
import { CherryBombs, PineOClock, Rhinoloupe, StinkyBreath } from 'model/Items'
import { ArmorProject } from 'model/Projects'
import { AutoRevive, ExtraLucre, FastRevive, ShareExperience } from 'model/Specials'

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
  relatedSpecials: () => [AutoRevive, ExtraLucre, FastRevive, ShareExperience],
  relatedItems: () => [PineOClock, CherryBombs, Rhinoloupe, StinkyBreath],
  relatedImmunities: () => [Poison, Sleep, Confusion, Petrification, Flameburst],
  relatedCards: () => [Phoenix, FertilityGoddess, OceanGod]
}

/**
 * When adding an item to a ring with the AutoRevive ability, if a Phoenix card is in the hidden slot or if no
 * Phoenix card is in a visible slot, the ability will be removed. This occurs before cards are pushed.
 *
 * @param project tempering project
 */
function activateRing(project: ArmorProject): void {
  const { special } = project
  const { hidden, top, middle, bottom } = project.cards

  if (special !== AutoRevive) {
    return
  }

  if (hidden === Phoenix || !Array.of(top, middle, bottom).includes(Phoenix)) {
    project.special = undefined
  }
}
