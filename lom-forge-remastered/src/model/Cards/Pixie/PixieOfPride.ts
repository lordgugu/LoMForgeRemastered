import { Card, Pixie } from 'model/Cards'
import { LittleEye } from 'model/Items'

export const PixieOfPride: Card = {
  id: 'PixieOfPride',
  name: 'Pixie (of Pride)',
  category: Pixie,
  price: 150,
  relatedItems: () => [LittleEye]
}
