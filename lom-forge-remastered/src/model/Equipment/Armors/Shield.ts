import { ArmorEquipment } from 'model/Equipment'
import { Confusion, Poison, Sleep } from 'model/Immunities'
import { HealingClaw, PineOClock, StinkyBreath } from 'model/Items'
import { StareImmunity } from 'model/Specials'

export const Shield: ArmorEquipment = {
  id: 'Shield',
  name: 'Shield',
  attributes: {
    strike: 8,
    slash: 8,
    pierce: 8,
    magic: 4
  },
  markerThreshold: 1,
  priceCoefficient: 10,
  relatedSpecials: () => [StareImmunity],
  relatedItems: () => [PineOClock, HealingClaw, StinkyBreath],
  relatedImmunities: () => [Poison, Sleep, Confusion]
}
