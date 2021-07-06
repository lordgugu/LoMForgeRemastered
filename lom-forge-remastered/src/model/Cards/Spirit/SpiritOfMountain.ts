import { Card, Spirit } from 'model/Cards'
import { Ether } from 'model/Items'

export const SpiritOfMountain: Card = {
  id: 'SpiritOfMountain',
  name: 'Spirit (of Mountain)',
  category: Spirit,
  price: 800,
  relatedItems: () => [Ether]
}
