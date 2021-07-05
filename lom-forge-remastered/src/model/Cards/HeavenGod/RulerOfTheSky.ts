import { Card, HeavenGod } from 'model/Cards'
import { SpadeBasil } from 'model/Items'

export const RulerOfTheSky: Card = {
  id: 'RulerOfTheSky',
  name: 'Ruler of the Sky',
  category: HeavenGod,
  price: 5000,
  relatedItems: () => [SpadeBasil]
}
