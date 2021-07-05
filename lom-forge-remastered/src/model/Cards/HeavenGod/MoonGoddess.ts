import { Card, HeavenGod } from 'model/Cards'
import { MoonCrystal } from 'model/Items'

export const MoonGoddess: Card = {
  id: 'MoonGoddess',
  name: 'Moon Goddess',
  category: HeavenGod,
  price: 3000,
  relatedItems: () => [MoonCrystal]
}
