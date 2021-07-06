import { Card, HeavenGod } from 'model/Cards'
import { DragonBlood } from 'model/Items'

export const GodOfWar: Card = {
  id: 'GodOfWar',
  name: 'God of War',
  category: HeavenGod,
  price: 3000,
  relatedItems: () => [DragonBlood]
}
