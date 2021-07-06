import { Card, None } from 'model/Cards'
import { Mercury } from 'model/Items'

export const Witch: Card = {
  id: 'Witch',
  name: 'Witch',
  category: None,
  price: 300,
  relatedItems: () => [Mercury]
}
