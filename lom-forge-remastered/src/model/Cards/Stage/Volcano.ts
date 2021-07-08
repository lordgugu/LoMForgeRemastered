import { Card, Phoenix, Stage } from 'model/Cards'
import { Pendant, Ring } from 'model/Equipment'
import { Ash } from 'model/Items'
import { AutoRevive } from 'model/Specials'

export const Volcano: Card = {
  id: 'Volcano',
  name: 'Volcano',
  category: Stage,
  price: 1300,
  relatedItems: () => [Ash],
  relatedCards: () => [Phoenix],
  relatedArmors: () => [Ring, Pendant],
  relatedSpecials: () => [AutoRevive]
}
