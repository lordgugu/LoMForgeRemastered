import { BedOfThorn, FertilityGoddess, GodOfDestruction, HeavensScale, OceanGod } from 'model/Cards'
import { Equipment } from 'model/Gear/Equipment'
import { Confusion, Flameburst, Freeze, Petrification, Poison, Sleep } from 'model/Immunities'
import { PineOClock, Rhinoloupe } from 'model/Items/Produce'
import { StinkyBreath } from 'model/Items/Vials'
import { NoHpRegeneration, NoReviveMoveHpRegeneration } from 'model/Specials'

export const Armor: Equipment = {
  id: 'Armor',
  name: 'Armor',
  attributes: {
    strike: 26,
    slash: 26,
    pierce: 26,
    magic: 4
  },
  markerThreshold: 3,
  priceCoefficient: 75,
  relatedItems: () => [PineOClock, Rhinoloupe, StinkyBreath],
  relatedImmunities: () => [Poison, Sleep, Confusion, Petrification, Flameburst, Freeze],
  relatedCards: () => [FertilityGoddess, OceanGod, HeavensScale, BedOfThorn, GodOfDestruction],
  relatedSpecials: () => [NoReviveMoveHpRegeneration, NoHpRegeneration]
}
