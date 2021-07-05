import { SpiritOfShoes } from 'model/Cards'
import { Shoes } from 'model/Equipment'
import { Special } from 'model/Specials'

export const ExtraExperience: Special = {
  id: 'ExtraExperience',
  name: 'Extra Experience',
  effect: ['Earn more Experience in battle'],
  relatedArmors: () => [Shoes],
  relatedCards: () => [SpiritOfShoes]
}
