import { Card, Element } from 'model/Cards'
import { UndineGold, UndineSilver, WaterStone } from 'model/Items'

export const Undine: Card = {
  id: 'Undine',
  name: 'Undine',
  category: Element,
  price: 250,
  relatedItems: () => [UndineGold, UndineSilver, WaterStone]
}
