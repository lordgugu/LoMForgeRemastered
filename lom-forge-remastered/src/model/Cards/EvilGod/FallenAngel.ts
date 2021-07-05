import { Card, EvilGod } from 'model/Cards'
import { AngelFeather } from 'model/Items'

export const FallenAngel: Card = {
  id: 'FallenAngel',
  name: 'Fallen Angel',
  category: EvilGod,
  price: 6660,
  relatedItems: () => [AngelFeather]
}
