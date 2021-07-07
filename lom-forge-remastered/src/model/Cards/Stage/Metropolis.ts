import { Card, Clown, King, Princess, Stage } from 'model/Cards'
import { Dialaurel } from 'model/Items'
import { Cleric } from '../None'

export const Metropolis: Card = {
  id: 'Metropolis',
  name: 'Metropolis',
  category: Stage,
  price: 1500,
  relatedItems: () => [Dialaurel],
  relatedCards: () => [King, Princess, Clown, Cleric]
}
