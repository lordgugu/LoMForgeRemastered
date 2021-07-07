import { ActiveCard, Card, EvilGod } from 'model/Cards'
import { ClearFeather } from 'model/Items'
import { PixieOfEnvy } from '../Pixie'
import { Ragnarok } from '../World'

export const LordOfFlies: ActiveCard = {
  id: 'LordOfFlies',
  name: 'Lord of Flies',
  category: EvilGod,
  price: 6660,
  activate: (project, slot) => {},
  relatedItems: () => [ClearFeather],
  relatedCards: () => [PixieOfEnvy, Ragnarok]
}
