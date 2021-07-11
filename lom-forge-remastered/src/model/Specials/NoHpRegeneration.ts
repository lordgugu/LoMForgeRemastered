import { BedOfThorn } from 'model/Cards/Stage'
import { AllEquipment } from 'model/Gear/Equipment'
import { Special } from 'model/Specials'

export const NoHpRegeneration: Special = {
  id: 'NoHpRegeneration',
  name: 'No HP Regeneration',
  effect: ['Prevents stationary HP regeneration in battle'],
  relatedEquipment: () => AllEquipment,
  relatedCards: () => [BedOfThorn]
}
