import { Phoenix, SpiritOfHousework, Unicorn } from 'model/Cards'
import { GodOfDestruction } from 'model/Cards/EvilGod'
import { FertilityGoddess, OceanGod } from 'model/Cards/HeavenGod'
import { NymphOfOrchards } from 'model/Cards/Maiden'
import { BedOfThorn, Spring, Volcano } from 'model/Cards/Stage'
import { HeavensScale } from 'model/Cards/World'
import { ActiveEquipment } from 'model/Gear/Equipment'
import { Confusion, Flameburst, Freeze, Petrification, Poison, Sleep } from 'model/Immunities'
import { CherryBombs, PineOClock, Rhinoloupe } from 'model/Items/Produce'
import { StinkyBreath } from 'model/Items/Vials'
import { AlteredArmor } from 'model/Projects'
import {
  AutoRevive,
  ExtraLucre,
  FastRevive,
  NoHpRegeneration,
  NoReviveMoveHpRegeneration,
  ShareExperience
} from 'model/Specials'

export const Ring: ActiveEquipment = {
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
  relatedSpecials: () => [
    AutoRevive,
    ExtraLucre,
    FastRevive,
    ShareExperience,
    NoReviveMoveHpRegeneration,
    NoHpRegeneration
  ],
  relatedItems: () => [PineOClock, CherryBombs, Rhinoloupe, StinkyBreath],
  relatedImmunities: () => [Poison, Sleep, Confusion, Petrification, Flameburst, Freeze],
  relatedCards: () => [
    Phoenix,
    FertilityGoddess,
    OceanGod,
    Volcano,
    Unicorn,
    Spring,
    SpiritOfHousework,
    HeavensScale,
    BedOfThorn,
    NymphOfOrchards,
    GodOfDestruction
  ]
}

/**
 * When adding an item to a ring with the AutoRevive ability, if a Phoenix card is in the hidden slot or if no
 * Phoenix card is in a visible slot, the ability will be removed. This occurs before cards are pushed.
 *
 * @param project tempering project
 */
function activateRing(project: AlteredArmor): void {
  const { special } = project
  const { hidden, top, middle, bottom } = project.cards

  if (special !== AutoRevive) {
    return
  }

  if (hidden === Phoenix || !Array.of(top, middle, bottom).includes(Phoenix)) {
    project.special = undefined
  }
}
