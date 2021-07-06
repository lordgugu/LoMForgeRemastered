import { Card, Maiden } from 'model/Cards'
import { WhiteFeather } from 'model/Items'

export const NymphOfTheSky: Card = {
  id: 'NymphOfTheSky',
  name: 'Nymph of the Sky',
  category: Maiden,
  price: 1000,
  relatedItems: () => [WhiteFeather]
}
