import { BedOfThorn, FertilityGoddess, GodOfDestruction, OceanGod, Volcano } from 'model/Cards'
import { HeavensScale } from 'model/Cards/World'
import { Equipment } from 'model/Gear/Equipment'
import { Confusion, Flameburst, Freeze, Petrification, Poison, Sleep } from 'model/Immunities'
import { Cabbadillo, PineOClock, Rhinoloupe } from 'model/Items/Produce'
import { StinkyBreath } from 'model/Items/Vials'
import { NoHpRegeneration, NoReviveMoveHpRegeneration } from 'model/Specials'

export const Hauberk: Equipment = {
  id: 'Hauberk',
  name: 'Hauberk',
  attributes: {
    strike: 12,
    slash: 16,
    pierce: 16,
    magic: 2
  },
  markerThreshold: 2,
  priceCoefficient: 60,
  relatedItems: () => [Cabbadillo, PineOClock, Rhinoloupe, StinkyBreath],
  relatedImmunities: () => [Poison, Sleep, Confusion, Petrification, Flameburst, Freeze],
  relatedCards: () => [FertilityGoddess, OceanGod, HeavensScale, BedOfThorn, Volcano, GodOfDestruction],
  relatedSpecials: () => [NoReviveMoveHpRegeneration, NoHpRegeneration]
}
