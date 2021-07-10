import { BedOfThorn, FertilityGoddess, GodOfDestruction, HeavensScale, OceanGod, WisdomGoddess } from 'model/Cards'
import { Equipment } from 'model/Gear/Equipment'
import { Confusion, Flameburst, Freeze, Petrification, Poison, Sleep } from 'model/Immunities'
import { HealingClaw } from 'model/Items/FangClaw'
import { PineOClock } from 'model/Items/Produce'
import { StinkyBreath } from 'model/Items/Vials'
import { NoHpRegeneration, NoReviveMoveHpRegeneration, StareImmunity } from 'model/Specials'

export const Shield: Equipment = {
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
  relatedSpecials: () => [StareImmunity, NoReviveMoveHpRegeneration, NoHpRegeneration],
  relatedItems: () => [PineOClock, HealingClaw, StinkyBreath],
  relatedImmunities: () => [Poison, Sleep, Confusion, Petrification, Flameburst, Freeze],
  relatedCards: () => [FertilityGoddess, OceanGod, WisdomGoddess, HeavensScale, BedOfThorn, GodOfDestruction]
}
