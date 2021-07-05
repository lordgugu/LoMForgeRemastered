import { Card, Element } from 'model/Cards'
import { AuraGold, AuraSilver } from 'model/Items'

export const Aura: Card = {
  id: 'Aura',
  name: 'Aura',
  category: Element,
  price: 250,
  relatedItems: () => [AuraGold, AuraSilver]
}
