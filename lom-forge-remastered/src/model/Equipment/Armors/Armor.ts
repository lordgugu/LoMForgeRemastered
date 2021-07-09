import { BedOfThorn, FertilityGoddess, HeavensScale, OceanGod } from 'model/Cards'
import { ArmorEquipment as ArmorEquipment } from 'model/Equipment'
import { Confusion, Flameburst, Petrification, Poison, Sleep } from 'model/Immunities'
import { PineOClock, Rhinoloupe, StinkyBreath } from 'model/Items'
import { NoHpRegeneration, NoReviveMoveHpRegeneration } from 'model/Specials'

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
  relatedItems: () => [PineOClock, Rhinoloupe, StinkyBreath],
  relatedImmunities: () => [Poison, Sleep, Confusion, Petrification, Flameburst],
  relatedCards: () => [FertilityGoddess, OceanGod, HeavensScale, BedOfThorn],
  relatedSpecials: () => [NoReviveMoveHpRegeneration, NoHpRegeneration]
}
