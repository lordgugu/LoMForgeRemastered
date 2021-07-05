import { Card, Pixie } from 'model/Cards'
import { CreepyEye } from 'model/Items'

export const PixieOfLust: Card = {
  id: 'PixieOfLust',
  name: 'Pixie (of Lust)',
  category: Pixie,
  price: 150,
  relatedItems: () => [CreepyEye]
}
