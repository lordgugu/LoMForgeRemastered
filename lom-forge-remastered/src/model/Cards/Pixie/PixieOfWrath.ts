import { Card, Pixie } from 'model/Cards'
import { AngryEye } from 'model/Items'

export const PixieOfWrath: Card = {
  id: 'PixieOfWrath',
  name: 'Pixie (of Wrath)',
  category: Pixie,
  price: 150,
  relatedItems: () => [AngryEye]
}
