import { BedOfThorn, FertilityGoddess, GodOfDestruction, OceanGod } from 'model/Cards'
import { HeavensScale } from 'model/Cards/World'
import { Equipment } from 'model/Gear/Equipment'
import { Confusion, Flameburst, Freeze, Petrification, Poison, Sleep } from 'model/Immunities'
import { PineOClock, Rhinoloupe } from 'model/Items/Produce'
import { StinkyBreath } from 'model/Items/Vials'
import { NoHpRegeneration, NoReviveMoveHpRegeneration } from 'model/Specials'

export const Gauntlet: Equipment = {
  id: 'Gauntlet',
  name: 'Gauntlet',
  attributes: {
    strike: 7,
    slash: 6,
    pierce: 8,
    magic: 2
  },
  markerThreshold: 2,
  priceCoefficient: 25,
  relatedItems: () => [PineOClock, Rhinoloupe, StinkyBreath],
  relatedImmunities: () => [Poison, Sleep, Confusion, Petrification, Flameburst, Freeze],
  relatedCards: () => [FertilityGoddess, OceanGod, HeavensScale, BedOfThorn, GodOfDestruction],
  relatedSpecials: () => [NoReviveMoveHpRegeneration, NoHpRegeneration]
}
