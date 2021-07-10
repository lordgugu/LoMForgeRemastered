import { Card, DyingEarth, Maiden } from 'model/Cards'
import { Lilipods } from 'model/Items/Produce'

export const EnticedNymph: Card = {
  id: 'EnticedNymph',
  name: 'Enticed Nymph',
  category: Maiden,
  price: 1000,
  relatedItems: () => [Lilipods],
  relatedCards: () => [DyingEarth]
}
