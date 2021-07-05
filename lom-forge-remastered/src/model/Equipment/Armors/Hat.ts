import { ArmorEquipment } from 'model/Equipment'
import { Poison, Sleep } from 'model/Immunities'
import { Citrisquid, CreepyEye, DangerousEye, LittleEye, PineOClock, SleepyEye, SweetMoai } from 'model/Items'

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
  relatedItems: () => [Citrisquid, PineOClock, SweetMoai, LittleEye, SleepyEye, DangerousEye, CreepyEye],
  relatedImmunities: () => [Poison, Sleep]
}
