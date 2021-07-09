import { BedOfThorn, FertilityGoddess, HeavensScale, OceanGod } from 'model/Cards'
import { ArmorEquipment } from 'model/Equipment'
import { Confusion, Darkness, Flameburst, Petrification, Poison, Sleep } from 'model/Immunities'
import { Moss, PineOClock, Rhinoloupe, StinkyBreath, SweetMoai } from 'model/Items'
import { NoHpRegeneration, NoReviveMoveHpRegeneration } from 'model/Specials'

export const Helm: ArmorEquipment = {
  id: 'Helm',
  name: 'Helm',
  attributes: {
    strike: 8,
    slash: 7,
    pierce: 6,
    magic: 2
  },
  markerThreshold: 2,
  priceCoefficient: 25,
  relatedItems: () => [PineOClock, SweetMoai, StinkyBreath, Moss, Rhinoloupe],
  relatedImmunities: () => [Poison, Sleep, Confusion, Darkness, Petrification, Flameburst],
  relatedCards: () => [FertilityGoddess, OceanGod, HeavensScale, BedOfThorn],
  relatedSpecials: () => [NoReviveMoveHpRegeneration, NoHpRegeneration]
}
