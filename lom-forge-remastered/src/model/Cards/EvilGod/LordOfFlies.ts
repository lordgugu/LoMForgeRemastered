import { Card, EvilGod } from 'model/Cards'
import { ClearFeather } from 'model/Items'

export const LordOfFlies: Card = {
  id: 'LordOfFlies',
  name: 'Lord of Flies',
  category: EvilGod,
  price: 6660,
  relatedItems: () => [ClearFeather]
}
