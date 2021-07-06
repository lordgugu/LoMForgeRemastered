import { Card, Pixie } from 'model/Cards'
import { DangerousEye, Garlicrown, HolyWater } from 'model/Items'

export const PixieOfGreed: Card = {
  id: 'PixieOfGreed',
  name: 'Pixie (of Greed)',
  category: Pixie,
  price: 150,
  relatedItems: () => [Garlicrown, DangerousEye, HolyWater]
}
