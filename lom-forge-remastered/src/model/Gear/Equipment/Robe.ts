import { BedOfThorn, FertilityGoddess, GodOfDestruction, HeavensScale, Metropolis, OceanGod, Spring } from 'model/Cards'
import { Equipment } from 'model/Gear/Equipment'
import { Confusion, Flameburst, Freeze, Petrification, Poison, Sleep } from 'model/Immunities'
import { BakedRoach, PineOClock, Rhinoloupe, StinkyBreath } from 'model/Items'
import { NoHpRegeneration, NoReviveMoveHpRegeneration } from 'model/Specials'

export const Robe: Equipment = {
  id: 'Robe',
  name: 'Robe',
  attributes: {
    strike: 6,
    slash: 6,
    pierce: 6,
    magic: 8
  },
  markerThreshold: 2,
  priceCoefficient: 30,
  relatedItems: () => [PineOClock, Rhinoloupe, StinkyBreath, BakedRoach],
  relatedImmunities: () => [Poison, Sleep, Confusion, Petrification, Flameburst, Freeze],
  relatedCards: () => [FertilityGoddess, OceanGod, HeavensScale, BedOfThorn, Metropolis, Spring, GodOfDestruction],
  relatedSpecials: () => [NoReviveMoveHpRegeneration, NoHpRegeneration]
}
