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
  StinkyBreath
} from 'model/Items'

export const Hauberk: ArmorEquipment = {
  id: 'Hauberk',
  name: 'Hauberk',
  attributes: {
    strike: 12,
    slash: 16,
    pierce: 16,
    magic: 2
  },
  markerThreshold: 2,
  priceCoefficient: 60,
  relatedItems: () => [
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
  relatedImmunities: () => [Poison, Sleep, Confusion]
}
