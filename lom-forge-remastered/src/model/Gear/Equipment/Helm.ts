import { FertilityGoddess, GodOfDestruction, OceanGod } from 'model/Cards'
import { BedOfThorn } from 'model/Cards/Stage'
import { HeavensScale } from 'model/Cards/World'
import { Equipment } from 'model/Gear/Equipment'
import { Confusion, Darkness, Flameburst, Freeze, Petrification, Poison, Sleep } from 'model/Immunities'
import { PineOClock, Rhinoloupe, SweetMoai } from 'model/Items/Produce'
import { Moss } from 'model/Items/Urns'
import { StinkyBreath } from 'model/Items/Vials'
import { NoHpRegeneration, NoReviveMoveHpRegeneration } from 'model/Specials'

export const Helm: Equipment = {
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
  relatedItems: () => [PineOClock, SweetMoai, StinkyBreath, Moss, Rhinoloupe],
  relatedImmunities: () => [Poison, Sleep, Confusion, Darkness, Petrification, Flameburst, Freeze],
  relatedCards: () => [FertilityGoddess, OceanGod, HeavensScale, BedOfThorn, GodOfDestruction],
  relatedSpecials: () => [NoReviveMoveHpRegeneration, NoHpRegeneration]
}
