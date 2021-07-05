import { Card, World } from 'model/Cards'
import { PineOClock } from 'model/Items'

export const Ragnarok: Card = {
  id: 'Ragnarok',
  name: 'Ragnarok',
  category: World,
  price: 10000,
  relatedItems: () => [PineOClock]
}
