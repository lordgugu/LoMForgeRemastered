import { NymphOfTheSky, SpiritOfHousework } from 'model/Cards'
import { GodOfDestruction } from 'model/Cards/EvilGod'
import { FertilityGoddess, OceanGod } from 'model/Cards/HeavenGod'
import { BedOfThorn } from 'model/Cards/Stage'
import { HeavensScale } from 'model/Cards/World'
import { Equipment } from 'model/Gear/Equipment'
import { Confusion, Flameburst, Freeze, Petrification, Poison, Sleep } from 'model/Immunities'
import { PineOClock, Rhinoloupe } from 'model/Items/Produce'
import { StinkyBreath } from 'model/Items/Vials'
import { MoveHpRegeneration, NoHpRegeneration, NoReviveMoveHpRegeneration } from 'model/Specials'

export const Mantle: Equipment = {
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
