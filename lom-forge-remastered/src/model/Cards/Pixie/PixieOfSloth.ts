import { Card, Pixie } from 'model/Cards'
import { SleepyEye } from 'model/Items'

export const PixieOfSloth: Card = {
  id: 'PixieOfSloth',
  name: 'Pixie (of Sloth)',
  category: Pixie,
  price: 150,
  relatedItems: () => [SleepyEye]
}
