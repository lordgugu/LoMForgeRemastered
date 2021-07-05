import { ArmorEquipment as ArmorEquipment } from 'model/Equipment'
import { Poison, Sleep } from 'model/Immunities'
import { Citrisquid, CreepyEye, DangerousEye, LittleEye, PineOClock, SleepyEye } from 'model/Items'

export const Armor: ArmorEquipment = {
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
  relatedItems: () => [Citrisquid, PineOClock, LittleEye, SleepyEye, DangerousEye, CreepyEye],
  relatedImmunities: () => [Poison, Sleep]
}
