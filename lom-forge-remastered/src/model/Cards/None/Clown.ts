import { Card, None } from 'model/Cards'
import { Bumpkin } from 'model/Items'

export const Clown: Card = {
  id: 'Clown',
  name: 'Clown',
  category: None,
  price: 250,
  relatedItems: () => [Bumpkin]
}
