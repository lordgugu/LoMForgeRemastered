import { Clown } from 'model/Cards'
import { ArmorEquipment as ArmorEquipment } from 'model/Equipment'
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

export const Armor: ArmorEquipment = {
  id: 'Armor',
  name: 'Armor',
  attributes: {
    strike: 26,
    slash: 26,
    pierce: 26,
    magic: 4
  },
  markerThreshold: 3,
  priceCoefficient: 75,
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
  relatedImmunities: () => [Poison, Sleep, Confusion],
  relatedCards: () => [Clown]
}
