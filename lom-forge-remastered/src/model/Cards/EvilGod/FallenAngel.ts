import { ActiveCard, EvilGod, PixieOfPride } from 'model/Cards'
import { AngelFeather } from 'model/Items'
import { Ragnarok } from '../World'

export const FallenAngel: ActiveCard = {
  id: 'FallenAngel',
  name: 'Fallen Angel',
  category: EvilGod,
  price: 6660,
  activate: (project, slot) => {},
  relatedItems: () => [AngelFeather],
  relatedCards: () => [PixieOfPride, Ragnarok]
}
