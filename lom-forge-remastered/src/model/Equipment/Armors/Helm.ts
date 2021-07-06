import { ArmorEquipment } from 'model/Equipment'
import { Confusion, Darkness, Poison, Sleep } from 'model/Immunities'
import {
  AromaOil,
  Citrisquid,
  CreepyEye,
  DangerousEye,
  LittleEye,
  Moss,
  MothWing,
  PineOClock,
  SleepyEye,
  StinkyBreath,
  SweetMoai
} from 'model/Items'

export const Helm: ArmorEquipment = {
  id: 'Helm',
  name: 'Helm',
  attributes: {
    strike: 8,
    slash: 7,
    pierce: 6,
    magic: 2
  },
  markerThreshold: 2,
  priceCoefficient: 25,
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
    StinkyBreath,
    Moss
  ],
  relatedImmunities: () => [Poison, Sleep, Confusion, Darkness]
}
