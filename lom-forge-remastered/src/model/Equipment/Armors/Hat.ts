import { ArmorEquipment } from 'model/Equipment'
import { Confusion, Poison, Sleep } from 'model/Immunities'
import {
  AromaOil,
  Citrisquid,
  CreepyEye,
  DangerousEye,
  LittleEye,
  MothWing,
  PineOClock,
  SleepyEye,
  StinkyBreath,
  SweetMoai
} from 'model/Items'

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
  relatedItems: () => [
    Citrisquid,
    PineOClock,
    SweetMoai,
    LittleEye,
    SleepyEye,
    DangerousEye,
    CreepyEye,
    MothWing,
    AromaOil,
    StinkyBreath
  ],
  relatedImmunities: () => [Poison, Sleep, Confusion]
}
