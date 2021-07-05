import { Card, Element } from 'model/Cards'
import { FireStone, SalaGold, SalaSilver } from 'model/Items'

export const Salamander: Card = {
  id: 'Salamander',
  name: 'Salamander',
  category: Element,
  price: 250,
  relatedItems: () => [SalaGold, SalaSilver, FireStone]
}
