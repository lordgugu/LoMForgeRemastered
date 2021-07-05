import { Card, Pixie } from 'model/Cards'
import { BlankEye } from 'model/Items'

export const PixieOfEnvy: Card = {
  id: 'PixieOfEnvy',
  name: 'Pixie (of Envy)',
  category: Pixie,
  price: 150,
  relatedItems: () => [BlankEye]
}
