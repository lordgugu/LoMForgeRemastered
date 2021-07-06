import { Card, Noble } from 'model/Cards'
import { DragonsBreath } from 'model/Items'

export const ManOfValor: Card = {
  id: 'ManOfValor',
  name: 'Man of Valor',
  category: Noble,
  price: 1000,
  relatedItems: () => [DragonsBreath]
}
