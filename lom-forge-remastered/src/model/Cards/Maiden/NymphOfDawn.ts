import { Card, Maiden } from 'model/Cards'
import { GlowCrystal } from 'model/Items'

export const NymphOfDawn: Card = {
  id: 'NymphOfDawn',
  name: 'Nymph of Dawn',
  category: Maiden,
  price: 1000,
  relatedItems: () => [GlowCrystal]
}
