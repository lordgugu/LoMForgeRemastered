import { Clown } from 'model/Cards'
import { ArmorEquipment } from 'model/Equipment'
import { Confusion, Poison, Sleep } from 'model/Immunities'
import {
  AromaOil,
  Citrisquid,
  CreepyEye,
  DangerousEye,
  HealingClaw,
  LittleEye,
  MothWing,
  PineOClock,
  SleepyEye,
  StinkyBreath
} from 'model/Items'

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
  relatedItems: () => [
    Citrisquid,
    PineOClock,
    HealingClaw,
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
