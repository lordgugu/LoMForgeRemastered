import { Card, HeavensScale, Stage, Yggdrasil } from 'model/Cards'
import { Needle, Needlettuce } from 'model/Items'

export const BedOfThorn: Card = {
  id: 'BedOfThorn',
  name: 'Bed of Thorn',
  category: Stage,
  price: 1500,
  relatedItems: () => [Needlettuce, Needle],
  relatedCards: () => [Yggdrasil, HeavensScale]
}
