import { FertilityGoddess } from 'model/Cards'
import { Ring } from 'model/Equipment'
import { Special } from 'model/Specials'

export const ShareExperience: Special = {
  id: 'ShareExperience',
  name: 'Share Experience',
  effect: ['Splits experience earned with other party members'],
  notes: ['Innate ability of the Forbidden Ring'],
  relatedArmors: () => [Ring],
  relatedCards: () => [FertilityGoddess]
}