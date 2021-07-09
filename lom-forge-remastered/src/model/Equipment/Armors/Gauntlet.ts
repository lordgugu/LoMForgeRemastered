import { BedOfThorn, FertilityGoddess, HeavensScale, OceanGod } from 'model/Cards'
import { ArmorEquipment } from 'model/Equipment'
import { Confusion, Flameburst, Petrification, Poison, Sleep } from 'model/Immunities'
import { PineOClock, Rhinoloupe, StinkyBreath } from 'model/Items'
import { NoHpRegeneration, NoReviveMoveHpRegeneration } from 'model/Specials'

export const Gauntlet: ArmorEquipment = {
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
  relatedImmunities: () => [Poison, Sleep, Confusion, Petrification, Flameburst],
  relatedCards: () => [FertilityGoddess, OceanGod, HeavensScale, BedOfThorn],
  relatedSpecials: () => [NoReviveMoveHpRegeneration, NoHpRegeneration]
}
