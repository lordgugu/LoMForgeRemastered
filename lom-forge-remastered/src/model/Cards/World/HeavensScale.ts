import { Card, World } from 'model/Cards'
import { Springanana } from 'model/Items'

export const HeavensScale: Card = {
  id: "HeavensScale",
  name: "Heaven's Scale",
  category: World,
  price: 1800,
  relatedItems: () => [Springanana]
}
