import { Card, Spirit } from 'model/Cards'
import { MothWing } from 'model/Items'

export const SpiritOfForest: Card = {
  id: 'SpiritOfForest',
  name: 'Spirit (of Forest)',
  category: Spirit,
  price: 800,
  relatedItems: () => [MothWing]
}
