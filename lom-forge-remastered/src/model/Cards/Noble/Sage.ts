import { Card, Noble } from 'model/Cards'
import { MessyScroll } from 'model/Items'

export const Sage: Card = {
  id: 'Sage',
  name: 'Sage',
  category: Noble,
  price: 1000,
  relatedItems: () => [MessyScroll]
}
