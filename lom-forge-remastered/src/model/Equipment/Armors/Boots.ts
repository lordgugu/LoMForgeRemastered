import { Clown } from 'model/Cards'
import { ArmorEquipment } from 'model/Equipment'
import { Confusion, Poison, Sleep } from 'model/Immunities'
import {
  AromaOil,
  Citrisquid,
  CreepyEye,
  DangerousEye,
  LittleEye,
  LoquatShoe,
  MothWing,
  PearOHeels,
  PineOClock,
  SleepyEye,
  StinkyBreath
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
  relatedItems: () => [
    LoquatShoe,
    PearOHeels,
    Citrisquid,
    PineOClock,
    LittleEye,
    SleepyEye,
    DangerousEye,
    CreepyEye,
    MothWing,
    AromaOil,
    StinkyBreath
  ],
  relatedImmunities: () => [Poison, Sleep, Confusion],
  relatedCards: () => [Clown]
}
