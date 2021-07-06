import { Card, None } from 'model/Cards'
import { Sulpher } from 'model/Items'

export const Sorcerer: Card = {
  id: 'Sorcerer',
  name: 'Sorcerer',
  category: None,
  price: 300,
  relatedItems: () => [Sulpher]
}
