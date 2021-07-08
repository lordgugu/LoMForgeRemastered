import { FertilityGoddess, OceanGod, SpiritOfOcean } from 'model/Cards'
import { ArmorEquipment } from 'model/Equipment'
import { Confusion, Flameburst, Petrification, Poison, Sleep } from 'model/Immunities'
import { PineOClock, Rhinoloupe, StinkyBreath, SweetMoai } from 'model/Items'

export const Hat: ArmorEquipment = {
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
  relatedImmunities: () => [Poison, Sleep, Confusion, Petrification, Flameburst],
  relatedCards: () => [FertilityGoddess, OceanGod, SpiritOfOcean]
}
