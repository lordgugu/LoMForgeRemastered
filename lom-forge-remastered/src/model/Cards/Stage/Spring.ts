import { Card, Stage, Unicorn } from 'model/Cards'
import { Pendant, Ring } from 'model/Equipment'
import { FishyFruit } from 'model/Items'
import { FastRevive } from 'model/Specials'

export const Spring: Card = {
  id: 'Spring',
  name: 'Spring',
  category: Stage,
  price: 1500,
  relatedItems: () => [FishyFruit],
  relatedCards: () => [Unicorn],
  relatedArmors: () => [Ring, Pendant],
  relatedSpecials: () => [FastRevive]
}
