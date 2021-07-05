import { Card, HeavenGod } from 'model/Cards'
import { SunCrystal } from 'model/Items'

export const SunGod: Card = {
  id: 'SunGod',
  name: 'Sun God',
  category: HeavenGod,
  price: 3000,
  relatedItems: () => [SunCrystal]
}
