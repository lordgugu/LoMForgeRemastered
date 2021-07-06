import { Card, Stage } from 'model/Cards'
import { Ash } from 'model/Items'

export const Volcano: Card = {
  id: 'Volcano',
  name: 'Volcano',
  category: Stage,
  price: 1300,
  relatedItems: () => [Ash]
}
