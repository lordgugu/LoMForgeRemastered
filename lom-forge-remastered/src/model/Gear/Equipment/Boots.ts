import { BedOfThorn, FertilityGoddess, GodOfDestruction, HeavensScale, OceanGod, SpiritOfShoes } from 'model/Cards'
import { Equipment } from 'model/Gear/Equipment'
import { Confusion, Flameburst, Freeze, Paralysis, Petrification, Poison, Sleep } from 'model/Immunities'
import { LoquatShoe, PearOHeels, PineOClock, Rhinoloupe } from 'model/Items/Produce'
import { StinkyBreath } from 'model/Items/Vials'
import { NoHpRegeneration, NoReviveMoveHpRegeneration } from 'model/Specials'

export const Boots: Equipment = {
  id: 'Boots',
  name: 'Boots',
  attributes: {
    strike: 6,
    slash: 8,
    pierce: 7,
    magic: 2
  },
  markerThreshold: 2,
  priceCoefficient: 25,
  relatedItems: () => [LoquatShoe, PearOHeels, PineOClock, Rhinoloupe, StinkyBreath],
  relatedImmunities: () => [Poison, Sleep, Confusion, Petrification, Flameburst, Paralysis, Freeze],
  relatedCards: () => [FertilityGoddess, OceanGod, SpiritOfShoes, HeavensScale, BedOfThorn, GodOfDestruction],
  relatedSpecials: () => [NoReviveMoveHpRegeneration, NoHpRegeneration]
}
