import { Card, EvilGod } from 'model/Cards'
import { GiantsHorn, OrangeOpus } from 'model/Items'

export const Leviathan: Card = {
  id: 'Leviathan',
  name: 'Leviathan',
  category: EvilGod,
  price: 6660,
  relatedItems: () => [OrangeOpus, GiantsHorn]
}
