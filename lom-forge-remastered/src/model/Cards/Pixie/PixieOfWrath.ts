import { Card, Pixie } from 'model/Cards'
import { AngryEye, Garlicrown, HolyWater, PoisonPowder } from 'model/Items'

export const PixieOfWrath: Card = {
  id: 'PixieOfWrath',
  name: 'Pixie (of Wrath)',
  category: Pixie,
  price: 150,
  relatedItems: () => [Garlicrown, AngryEye, HolyWater, PoisonPowder]
}
