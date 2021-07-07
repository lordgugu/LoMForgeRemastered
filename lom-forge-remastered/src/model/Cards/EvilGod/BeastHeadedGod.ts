import { ActiveCard, EvilGod, PixieOfGreed, Ragnarok } from 'model/Cards'
import { PoisonFang } from 'model/Items'

export const BeastHeadedGod: ActiveCard = {
  id: 'BeastHeadedGod',
  name: 'Beast-headed God',
  category: EvilGod,
  price: 6660,
  activate: (project, slot) => {},
  relatedItems: () => [PoisonFang],
  relatedCards: () => [PixieOfGreed, Ragnarok]
}
