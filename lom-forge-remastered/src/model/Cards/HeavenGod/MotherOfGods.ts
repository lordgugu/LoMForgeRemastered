import { Card, HeavenGod } from 'model/Cards'
import { HeartMint } from 'model/Items'

export const MotherOfGods: Card = {
  id: 'MotherOfGods',
  name: 'Mother of Gods',
  category: HeavenGod,
  price: 4000,
  relatedItems: () => [HeartMint]
}
