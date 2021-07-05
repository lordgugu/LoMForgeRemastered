import { Card, Maiden } from 'model/Cards'
import { Lilipods } from 'model/Items'

export const EnticedNymph: Card = {
  id: 'EnticedNymph',
  name: 'Enticed Nymph',
  category: Maiden,
  price: 1000,
  relatedItems: () => [Lilipods]
}
