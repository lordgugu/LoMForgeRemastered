import { ArmorEquipment } from 'model/Equipment'
import { Confusion, Poison, Sleep } from 'model/Immunities'
import {
  AromaOil,
  BakedRoach,
  Citrisquid,
  CreepyEye,
  DangerousEye,
  LittleEye,
  MothWing,
  PineOClock,
  SleepyEye,
  StinkyBreath
} from 'model/Items'

export const Robe: ArmorEquipment = {
  id: 'Robe',
  name: 'Robe',
  attributes: {
    strike: 6,
    slash: 6,
    pierce: 6,
    magic: 8
  },
  markerThreshold: 2,
  priceCoefficient: 30,
  relatedItems: () => [
    Citrisquid,
    PineOClock,
    LittleEye,
    SleepyEye,
    DangerousEye,
    CreepyEye,
    MothWing,
    AromaOil,
    StinkyBreath,
    BakedRoach
  ],
  relatedImmunities: () => [Poison, Sleep, Confusion]
}
