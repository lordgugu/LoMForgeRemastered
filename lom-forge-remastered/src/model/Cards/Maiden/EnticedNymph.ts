import { Card } from 'model/Cards'
import { Maiden } from 'model/Cards/Maiden'
import { DyingEarth } from 'model/Cards/World'
import { Lilipods } from 'model/Items/Produce'

export const EnticedNymph: Card = {
  id: 'EnticedNymph',
  name: 'Enticed Nymph',
  category: Maiden,
  price: 1000,
  relatedItems: () => [Lilipods],
  relatedCards: () => [DyingEarth]
}
