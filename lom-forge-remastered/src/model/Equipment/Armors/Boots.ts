import { ArmorEquipment } from 'model/Equipment'
import { Confusion, Poison, Sleep } from 'model/Immunities'
import { LoquatShoe, PearOHeels, PineOClock, Rhinoloupe, StinkyBreath } from 'model/Items'

export const Boots: ArmorEquipment = {
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
  relatedImmunities: () => [Poison, Sleep, Confusion]
}
