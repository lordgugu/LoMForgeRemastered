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
