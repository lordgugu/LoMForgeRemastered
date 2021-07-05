import { Card, Stage } from 'model/Cards'
import { HealingClaw, RocketPapaya } from 'model/Items'

export const Tower: Card = {
  id: 'Tower',
  name: 'Tower',
  category: Stage,
  price: 1500,
  relatedItems: () => [RocketPapaya, HealingClaw]
}
