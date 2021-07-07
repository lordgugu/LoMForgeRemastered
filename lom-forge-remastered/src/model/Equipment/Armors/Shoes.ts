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
