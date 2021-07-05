import { Card, None } from 'model/Cards'
import { PeachPuppy } from 'model/Items'

export const Wolf: Card = {
  id: 'Wolf',
  name: 'Wolf',
  category: None,
  price: 300,
  relatedItems: () => [PeachPuppy]
}
