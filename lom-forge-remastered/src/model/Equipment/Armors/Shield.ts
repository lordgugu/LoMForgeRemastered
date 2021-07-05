import { ArmorEquipment } from 'model/Equipment'
import { Poison, Sleep } from 'model/Immunities'
import { Citrisquid, CreepyEye, DangerousEye, HealingClaw, LittleEye, PineOClock, SleepyEye } from 'model/Items'

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
  relatedItems: () => [Citrisquid, PineOClock, HealingClaw, LittleEye, SleepyEye, DangerousEye, CreepyEye],
  relatedImmunities: () => [Poison, Sleep]
}
