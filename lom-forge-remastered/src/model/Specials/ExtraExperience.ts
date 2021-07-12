import { SpiritOfShoes } from 'model/Cards/Spirit'
import { Shoes } from 'model/Gear/Equipment'
import { Special } from 'model/Specials'

export const ExtraExperience: Special = {
  id: 'ExtraExperience',
  name: 'Extra Experience',
  effect: ['Earn more Experience in battle'],
  relatedEquipment: () => [Shoes],
  relatedCards: () => [SpiritOfShoes]
}
