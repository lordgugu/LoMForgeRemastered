import { BeastGod, Card } from 'model/Cards'
import { Whalamato } from 'model/Items'

export const Unicorn: Card = {
  id: 'Unicorn',
  name: 'Unicorn',
  category: BeastGod,
  price: 2500,
  relatedItems: () => [Whalamato]
}
