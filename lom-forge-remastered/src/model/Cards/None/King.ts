import { Card, None } from 'model/Cards'
import { Garlicrown } from 'model/Items'

export const King: Card = {
  id: 'King',
  name: 'King',
  category: None,
  price: 1500,
  relatedItems: () => [Garlicrown]
}
