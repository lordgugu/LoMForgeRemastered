import { Card, Clown, King, Princess, Stage } from 'model/Cards'
import { Dialaurel } from 'model/Items'

export const Metropolis: Card = {
  id: 'Metropolis',
  name: 'Metropolis',
  category: Stage,
  price: 1500,
  relatedItems: () => [Dialaurel],
  relatedCards: () => [King, Princess, Clown]
}
