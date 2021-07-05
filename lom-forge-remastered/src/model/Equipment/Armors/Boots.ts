import { ArmorEquipment } from 'model/Equipment'
import { Poison, Sleep } from 'model/Immunities'
import {
  Citrisquid,
  CreepyEye,
  DangerousEye,
  LittleEye,
  LoquatShoes,
  PearOHeels,
  PineOClock,
  SleepyEye
} from 'model/Items'

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
  relatedItems: () => [LoquatShoes, PearOHeels, Citrisquid, PineOClock, LittleEye, SleepyEye, DangerousEye, CreepyEye],
  relatedImmunities: () => [Poison, Sleep]
}
