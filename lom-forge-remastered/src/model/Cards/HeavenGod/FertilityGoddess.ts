import { Card, HeavenGod } from 'model/Cards'
import { EarOfWheat } from 'model/Items'

export const FertilityGoddess: Card = {
  id: 'FertilityGoddess',
  name: 'Fertility Goddess',
  category: HeavenGod,
  price: 3000,
  relatedItems: () => [EarOfWheat]
}
