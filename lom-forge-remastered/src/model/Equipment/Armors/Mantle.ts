import { ArmorEquipment } from 'model/Equipment'
import { Poison, Sleep } from 'model/Immunities'
import { Citrisquid, CreepyEye, DangerousEye, LittleEye, PineOClock, SleepyEye } from 'model/Items'

export const Mantle: ArmorEquipment = {
  id: 'Mantle',
  name: 'Mantle',
  attributes: {
    strike: 4,
    slash: 4,
    pierce: 4,
    magic: 12
  },
  markerThreshold: 2,
  priceCoefficient: 20,
  relatedItems: () => [Citrisquid, PineOClock, LittleEye, SleepyEye, DangerousEye, CreepyEye],
  relatedImmunities: () => [Poison, Sleep]
}
