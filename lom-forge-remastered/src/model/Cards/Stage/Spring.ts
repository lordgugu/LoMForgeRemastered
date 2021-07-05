import { Card, Stage } from 'model/Cards'
import { FishyFruit } from 'model/Items'

export const Spring: Card = {
  id: 'Spring',
  name: 'Spring',
  category: Stage,
  price: 1500,
  relatedItems: () => [FishyFruit]
}
