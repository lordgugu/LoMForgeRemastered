import { Card, Element } from 'model/Cards'
import { EarthStone, GnomeGold, GnomeSilver } from 'model/Items'

export const Gnome: Card = {
  id: 'Gnome',
  name: 'Gnome',
  category: Element,
  price: 250,
  relatedItems: () => [GnomeGold, GnomeSilver, EarthStone]
}
