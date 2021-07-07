import { ActiveCard, Card, EvilGod } from 'model/Cards'
import { SharpClaw } from 'model/Items'
import { PixieOfWrath } from '../Pixie'
import { Ragnarok } from '../World'

export const GodOfDestruction: ActiveCard = {
  id: 'GodOfDestruction',
  name: 'God of Destruction',
  category: EvilGod,
  price: 6660,
  activate: (project, slot) => {},
  relatedItems: () => [SharpClaw],
  relatedCards: () => [PixieOfWrath, Ragnarok]
}
