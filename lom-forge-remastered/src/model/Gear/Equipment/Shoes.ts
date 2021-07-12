import { GodOfDestruction } from 'model/Cards/EvilGod'
import { FertilityGoddess, OceanGod, WindGod } from 'model/Cards/HeavenGod'
import { SpiritOfShoes } from 'model/Cards/Spirit'
import { BedOfThorn } from 'model/Cards/Stage'
import { HeavensScale } from 'model/Cards/World'
import { Equipment } from 'model/Gear/Equipment'
import { Confusion, Flameburst, Freeze, Paralysis, Petrification, Poison, Sleep } from 'model/Immunities'
import { LoquatShoe, PearOHeels, PineOClock, Rhinoloupe } from 'model/Items/Produce'
import { StinkyBreath } from 'model/Items/Vials'
import { ExtraExperience, NoHpRegeneration, NoReviveMoveHpRegeneration } from 'model/Specials'

export const Shoes: Equipment = {
  id: 'Shoes',
  name: 'Shoes',
  attributes: {
    strike: 2,
    slash: 4,
    pierce: 2,
    magic: 4
  },
  markerThreshold: 2,
  priceCoefficient: 10,
  relatedSpecials: () => [ExtraExperience, NoReviveMoveHpRegeneration, NoHpRegeneration],
  relatedItems: () => [LoquatShoe, PearOHeels, PineOClock, Rhinoloupe, StinkyBreath],
  relatedImmunities: () => [Poison, Sleep, Confusion, Petrification, Flameburst, Paralysis, Freeze],
  relatedCards: () => [FertilityGoddess, OceanGod, WindGod, SpiritOfShoes, HeavensScale, BedOfThorn, GodOfDestruction]
}
