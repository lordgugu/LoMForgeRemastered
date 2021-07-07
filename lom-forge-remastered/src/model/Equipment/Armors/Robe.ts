import { FertilityGoddess, OceanGod } from 'model/Cards'
import { ArmorEquipment } from 'model/Equipment'
import { Confusion, Flameburst, Petrification, Poison, Sleep } from 'model/Immunities'
import { BakedRoach, PineOClock, Rhinoloupe, StinkyBreath } from 'model/Items'

export const Robe: ArmorEquipment = {
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
  relatedImmunities: () => [Poison, Sleep, Confusion, Petrification, Flameburst],
  relatedCards: () => [FertilityGoddess, OceanGod]
}
