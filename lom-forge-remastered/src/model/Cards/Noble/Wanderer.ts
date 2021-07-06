import { Card, Noble } from 'model/Cards'
import { WadOfWool } from 'model/Items'

export const Wanderer: Card = {
  id: 'Wanderer',
  name: 'Wanderer',
  category: Noble,
  price: 1000,
  relatedItems: () => [WadOfWool]
}
