import { Card, Pixie } from 'model/Cards'
import { CreepyEye, Garlicrown, HolyWater, StinkyBreath } from 'model/Items'

export const PixieOfLust: Card = {
  id: 'PixieOfLust',
  name: 'Pixie (of Lust)',
  category: Pixie,
  price: 150,
  relatedItems: () => [Garlicrown, CreepyEye, HolyWater, StinkyBreath]
}
