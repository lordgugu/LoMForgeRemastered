import {
  BedOfThorn,
  FertilityGoddess,
  GodOfDestruction,
  HeavensScale,
  NymphOfTheSky,
  OceanGod,
  SpiritOfHousework
} from 'model/Cards'
import { ArmorEquipment } from 'model/Equipment'
import { Confusion, Flameburst, Freeze, Petrification, Poison, Sleep } from 'model/Immunities'
import { PineOClock, Rhinoloupe, StinkyBreath } from 'model/Items'
import { MoveHpRegeneration, NoHpRegeneration, NoReviveMoveHpRegeneration } from 'model/Specials'

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
  relatedSpecials: () => [MoveHpRegeneration, NoReviveMoveHpRegeneration, NoHpRegeneration],
  relatedItems: () => [PineOClock, Rhinoloupe, StinkyBreath],
  relatedImmunities: () => [Poison, Sleep, Confusion, Petrification, Flameburst, Freeze],
  relatedCards: () => [
    FertilityGoddess,
    OceanGod,
    SpiritOfHousework,
    HeavensScale,
    BedOfThorn,
    NymphOfTheSky,
    GodOfDestruction
  ]
}
