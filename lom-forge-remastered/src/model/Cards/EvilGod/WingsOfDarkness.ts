import { ActiveCard, EvilGod, PixieOfLust, Ragnarok } from 'model/Cards'
import { BlackenedBat } from 'model/Items'

export const WingsOfDarkness: ActiveCard = {
  id: 'WingsOfDarkness',
  name: 'Wings of Darkness',
  category: EvilGod,
  price: 6660,
  activate: (project, slot) => {},
  relatedItems: () => [BlackenedBat],
  relatedCards: () => [PixieOfLust, Ragnarok]
}
