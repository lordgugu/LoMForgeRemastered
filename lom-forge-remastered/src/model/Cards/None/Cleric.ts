import { Card, None } from 'model/Cards'
import { HolyWater } from 'model/Items'

export const Cleric: Card = {
  id: 'Cleric',
  name: 'Cleric',
  category: None,
  price: 500,
  relatedItems: () => [HolyWater]
}
