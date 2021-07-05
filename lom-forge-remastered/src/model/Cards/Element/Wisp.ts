import { Card, Element } from 'model/Cards'
import { WispGold, WispSilver } from 'model/Items'

export const Wisp: Card = {
  id: 'Wisp',
  name: 'Wisp',
  category: Element,
  price: 250,
  relatedItems: () => [WispGold, WispSilver]
}
