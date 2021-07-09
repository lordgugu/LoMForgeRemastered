import { BedOfThorn, FertilityGoddess, GodOfDestruction, HeavensScale, OceanGod, SpiritOfOcean } from 'model/Cards'
import { Equipment } from 'model/Gear/Equipment'
import { Confusion, Flameburst, Freeze, Petrification, Poison, Sleep } from 'model/Immunities'
import { PineOClock, Rhinoloupe, StinkyBreath, SweetMoai } from 'model/Items'
import { NoHpRegeneration, NoReviveMoveHpRegeneration } from 'model/Specials'

export const Hat: Equipment = {
  id: 'Hat',
  name: 'Hat',
  attributes: {
    strike: 4,
    slash: 2,
    pierce: 2,
    magic: 4
  },
  markerThreshold: 2,
  priceCoefficient: 15,
  relatedItems: () => [PineOClock, Rhinoloupe, SweetMoai, StinkyBreath],
  relatedImmunities: () => [Poison, Sleep, Confusion, Petrification, Flameburst, Freeze],
  relatedCards: () => [FertilityGoddess, OceanGod, SpiritOfOcean, HeavensScale, BedOfThorn, GodOfDestruction],
  relatedSpecials: () => [NoReviveMoveHpRegeneration, NoHpRegeneration]
}
