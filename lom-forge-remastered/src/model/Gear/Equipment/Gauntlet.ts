import { BedOfThorn, FertilityGoddess, GodOfDestruction, HeavensScale, OceanGod } from 'model/Cards'
import { Equipment } from 'model/Gear/Equipment'
import { Confusion, Flameburst, Freeze, Petrification, Poison, Sleep } from 'model/Immunities'
import { PineOClock, Rhinoloupe, StinkyBreath } from 'model/Items'
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
