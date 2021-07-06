import { Card, HeavenGod } from 'model/Cards'
import { AromaOil } from 'model/Items'

export const WisdomGoddess: Card = {
  id: 'WisdomGoddess',
  name: 'Wisdom Goddess',
  category: HeavenGod,
  price: 3000,
  relatedItems: () => [AromaOil]
}
