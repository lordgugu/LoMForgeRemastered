import { ArmorEquipment } from 'model/Equipment'
import { Confusion, Poison, Sleep } from 'model/Immunities'
import { Cabbadillo, PineOClock, Rhinoloupe, StinkyBreath } from 'model/Items'

export const Hauberk: ArmorEquipment = {
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
  relatedImmunities: () => [Poison, Sleep, Confusion]
}
