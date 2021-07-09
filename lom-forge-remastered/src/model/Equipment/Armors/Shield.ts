import { BedOfThorn, FertilityGoddess, HeavensScale, OceanGod, WisdomGoddess } from 'model/Cards'
import { ArmorEquipment } from 'model/Equipment'
import { Confusion, Flameburst, Petrification, Poison, Sleep } from 'model/Immunities'
import { HealingClaw, PineOClock, StinkyBreath } from 'model/Items'
import { NoHpRegeneration, NoReviveMoveHpRegeneration, StareImmunity } from 'model/Specials'

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
  relatedSpecials: () => [StareImmunity, NoReviveMoveHpRegeneration, NoHpRegeneration],
  relatedItems: () => [PineOClock, HealingClaw, StinkyBreath],
  relatedImmunities: () => [Poison, Sleep, Confusion, Petrification, Flameburst],
  relatedCards: () => [FertilityGoddess, OceanGod, WisdomGoddess, HeavensScale, BedOfThorn]
}
