import { Card, Spirit } from 'model/Cards'
import { Hairball } from 'model/Items'

export const SpiritOfHousework: Card = {
  id: 'SpiritOfHousework',
  name: 'Spirit (of Housework)',
  category: Spirit,
  price: 800,
  relatedItems: () => [Hairball]
}
