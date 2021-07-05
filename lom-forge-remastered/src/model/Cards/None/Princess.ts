import { Card, None } from 'model/Cards'
import { HoneyOnion } from 'model/Items'

export const Princess: Card = {
  id: 'Princess',
  name: 'Princess',
  category: None,
  price: 1500,
  relatedItems: () => [HoneyOnion]
}
