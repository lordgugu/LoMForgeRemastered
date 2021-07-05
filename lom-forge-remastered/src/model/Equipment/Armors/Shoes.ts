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

export const Shoes: ArmorEquipment = {
  id: 'Shoes',
  name: 'Shoes',
  attributes: {
    strike: 2,
    slash: 4,
    pierce: 2,
    magic: 4
  },
  markerThreshold: 2,
  priceCoefficient: 10,
  relatedItems: () => [LoquatShoes, PearOHeels, Citrisquid, PineOClock, LittleEye, SleepyEye, DangerousEye, CreepyEye],
  relatedImmunities: () => [Poison, Sleep]
}
