import { Card, Maiden } from 'model/Cards'
import { Applesocks } from 'model/Items'

export const NymphOfOrchards: Card = {
  id: 'NymphOfOrchards',
  name: 'Nymph of Orchards',
  category: Maiden,
  price: 1000,
  relatedItems: () => [Applesocks]
}
