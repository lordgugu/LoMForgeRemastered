import { Card, Spirit } from 'model/Cards'
import { LoquatShoe, PearOHeels } from 'model/Items'

export const SpiritOfShoes: Card = {
  id: 'SpiritOfShoes',
  name: 'Spirit (of Shoes)',
  category: Spirit,
  price: 800,
  relatedItems: () => [LoquatShoe, PearOHeels]
}
