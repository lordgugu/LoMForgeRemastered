import { Card, Pixie } from 'model/Cards'
import { DangerousEye } from 'model/Items'

export const PixieOfGreed: Card = {
  id: 'PixieOfGreed',
  name: 'Pixie (of Greed)',
  category: Pixie,
  price: 150,
  relatedItems: () => [DangerousEye]
}
