import { Card, HeavenGod } from 'model/Cards'
import { Ether } from 'model/Items'

export const BlacksmithGod: Card = {
  id: 'BlacksmithGod',
  name: 'Blacksmith God',
  category: HeavenGod,
  price: 2800,
  relatedItems: () => [Ether]
}
