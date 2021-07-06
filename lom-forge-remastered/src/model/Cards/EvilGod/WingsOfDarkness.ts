import { Card, EvilGod } from 'model/Cards'
import { BlackenedBat } from 'model/Items'

export const WingsOfDarkness: Card = {
  id: 'WingsOfDarkness',
  name: 'Wings of Darkness',
  category: EvilGod,
  price: 6660,
  relatedItems: () => [BlackenedBat]
}
