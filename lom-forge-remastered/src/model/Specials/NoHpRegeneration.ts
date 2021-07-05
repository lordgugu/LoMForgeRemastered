import { BedOfThorn } from 'model/Cards'
import { AllArmors } from 'model/Equipment'
import { Special } from 'model/Specials'

export const NoHpRegeneration: Special = {
  id: 'NoHpRegeneration',
  name: 'No HP Regeneration',
  effect: ['Prevents stationary HP regeneration in battle'],
  relatedArmors: () => AllArmors,
  relatedCards: () => [BedOfThorn]
}
