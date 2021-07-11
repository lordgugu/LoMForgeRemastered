import { BedOfThorn, FertilityGoddess, GodOfDestruction, Metropolis, OceanGod, Spring } from 'model/Cards'
import { HeavensScale } from 'model/Cards/World'
import { Equipment } from 'model/Gear/Equipment'
import { Confusion, Flameburst, Freeze, Petrification, Poison, Sleep } from 'model/Immunities'
import { BakedRoach } from 'model/Items/Pellets'
import { PineOClock, Rhinoloupe } from 'model/Items/Produce'
import { StinkyBreath } from 'model/Items/Vials'
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
