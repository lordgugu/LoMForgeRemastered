import { Card, EvilGod } from 'model/Cards'
import { PoisonFang } from 'model/Items'

export const BeastHeadedGod: Card = {
  id: 'BeastHeadedGod',
  name: 'Beast-headed God',
  category: EvilGod,
  price: 6660,
  relatedItems: () => [PoisonFang]
}
