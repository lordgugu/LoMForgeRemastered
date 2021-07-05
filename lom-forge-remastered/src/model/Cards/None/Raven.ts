import { Card, None } from 'model/Cards'
import { RavenFeather } from 'model/Items'

export const Raven: Card = {
  id: 'Raven',
  name: 'Raven',
  category: None,
  price: 300,
  relatedItems: () => [RavenFeather]
}
