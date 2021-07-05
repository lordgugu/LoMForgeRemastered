import { Card, Element } from 'model/Cards'
import { JinnGold, JinnSilver, WindStone } from 'model/Items'

export const Jinn: Card = {
  id: 'Jinn',
  name: 'Jinn',
  category: Element,
  price: 250,
  relatedItems: () => [JinnGold, JinnSilver, WindStone]
}
