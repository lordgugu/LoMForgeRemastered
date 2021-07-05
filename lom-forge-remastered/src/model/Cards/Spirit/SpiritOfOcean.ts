import { Card, Spirit } from 'model/Cards'
import { Conchurnip } from 'model/Items'

export const SpiritOfOcean: Card = {
  id: 'SpiritOfOcean',
  name: 'Spirit (of Ocean)',
  category: Spirit,
  price: 800,
  relatedItems: () => [Conchurnip]
}
