import { BeastGod, Card } from 'model/Cards'
import { FlamingQuill } from 'model/Items'

export const Phoenix: Card = {
  id: 'Phoenix',
  name: 'Phoenix',
  category: BeastGod,
  price: 2500,
  relatedItems: () => [FlamingQuill]
}
