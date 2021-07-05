import { Card, World } from 'model/Cards'
import { SpinySeed } from 'model/Items'

export const Yggdrasil: Card = {
  id: 'Yggdrasil',
  name: 'Yggdrasil',
  category: World,
  price: 3000,
  relatedItems: () => [SpinySeed]
}
