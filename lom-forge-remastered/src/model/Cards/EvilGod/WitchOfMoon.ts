import { Card, EvilGod } from 'model/Cards'
import { VampireFang } from 'model/Items'

export const WitchOfMoon: Card = {
  id: 'WitchOfMoon',
  name: 'Witch of Moon',
  category: EvilGod,
  price: 6660,
  relatedItems: () => [VampireFang]
}
