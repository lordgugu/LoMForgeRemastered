import { Card, World } from 'model/Cards'
import { Needle, Needlettuce } from 'model/Items'

export const BedOfThorn: Card = {
  id: 'BedOfThorn',
  name: 'Bed of Thorn',
  category: World,
  price: 1500,
  relatedItems: () => [Needlettuce, Needle]
}
