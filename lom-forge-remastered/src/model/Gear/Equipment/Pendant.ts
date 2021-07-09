import {
  BedOfThorn,
  FertilityGoddess,
  GoddessOfLove,
  GodOfDestruction,
  HeavensScale,
  OceanGod,
  Phoenix,
  SacrificedNymph,
  Spring,
  Unicorn,
  Volcano
} from 'model/Cards'
import { Equipment } from 'model/Gear/Equipment'
import { Confusion, Darkness, Flameburst, Freeze, Paralysis, Petrification, Poison, Sleep } from 'model/Immunities'
import { BlackenedBat, PineOClock, Rhinoloupe, StinkyBreath, ZombieClaw } from 'model/Items'
import { AlteredArmor } from 'model/Projects'
import { AutoRevive, ExtraLucre, FastRevive, NoHpRegeneration, NoReviveMoveHpRegeneration } from 'model/Specials'

export const Pendant: Equipment = {
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
  relatedSpecials: () => [AutoRevive, ExtraLucre, FastRevive, NoReviveMoveHpRegeneration, NoHpRegeneration],
  relatedItems: () => [PineOClock, ZombieClaw, Rhinoloupe, StinkyBreath, BlackenedBat],
  relatedImmunities: () => [Poison, Sleep, Paralysis, Confusion, Darkness, Petrification, Flameburst, Freeze],
  relatedCards: () => [
    Phoenix,
    GoddessOfLove,
    FertilityGoddess,
    OceanGod,
    Volcano,
    Unicorn,
    Spring,
    HeavensScale,
    BedOfThorn,
    SacrificedNymph,
    GodOfDestruction
  ]
}

/**
 * When adding an item to a pendant with the AutoRevive ability, if a Phoenix card is in the hidden slot or if no
 * Phoenix card is in a visible slot, the ability will be removed. This occurs before cards are pushed.
 *
 * @param project tempering project
 */
function activatePendant(project: AlteredArmor): void {
  const { special } = project
  const { hidden, top, middle, bottom } = project.cards

  if (special !== AutoRevive) {
    return
  }

  if (hidden === Phoenix || !Array.of(top, middle, bottom).includes(Phoenix)) {
    project.special = undefined
  }
}
