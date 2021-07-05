import { Card, HeavenGod } from 'model/Cards'
import { Orcaplant, Squalphin } from 'model/Items'

export const OceanGod: Card = {
  id: 'OceanGod',
  name: 'Ocean God',
  category: HeavenGod,
  price: 3000,
  relatedItems: () => [Squalphin, Orcaplant]
}
