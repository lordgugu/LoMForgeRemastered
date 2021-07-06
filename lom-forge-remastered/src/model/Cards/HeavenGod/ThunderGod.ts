import { Card, HeavenGod } from 'model/Cards'
import { Electricity } from 'model/Items'

export const ThunderGod: Card = {
  id: 'ThunderGod',
  name: 'Thunder God',
  category: HeavenGod,
  price: 4000,
  relatedItems: () => [Electricity]
}
