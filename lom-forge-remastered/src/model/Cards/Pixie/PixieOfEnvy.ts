import { Card, Pixie } from 'model/Cards'
import { BlankEye, Garlicrown, HolyWater, SleepyPowder } from 'model/Items'

export const PixieOfEnvy: Card = {
  id: 'PixieOfEnvy',
  name: 'Pixie (of Envy)',
  category: Pixie,
  price: 150,
  relatedItems: () => [Garlicrown, BlankEye, HolyWater, SleepyPowder]
}
