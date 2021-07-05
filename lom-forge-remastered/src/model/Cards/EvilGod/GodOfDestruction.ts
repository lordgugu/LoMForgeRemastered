import { Card, EvilGod } from 'model/Cards'
import { SharpClaw } from 'model/Items'

export const GodOfDestruction: Card = {
  id: 'GodOfDestruction',
  name: 'God of Destruction',
  category: EvilGod,
  price: 6660,
  relatedItems: () => [SharpClaw]
}
