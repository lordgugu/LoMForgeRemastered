import { Card, Element } from 'model/Cards'
import { ShadeGold, ShadeSilver } from 'model/Items'

export const Shade: Card = {
  id: 'Shade',
  name: 'Shade',
  category: Element,
  price: 250,
  relatedItems: () => [ShadeGold, ShadeSilver]
}
