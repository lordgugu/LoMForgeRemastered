import { ActiveCard, EvilGod, PixieOfGluttony, Ragnarok } from 'model/Cards'
import { GiantsHorn, OrangeOpus } from 'model/Items'

export const Leviathan: ActiveCard = {
  id: 'Leviathan',
  name: 'Leviathan',
  category: EvilGod,
  price: 6660,
  activate: (project, slot) => {},
  relatedItems: () => [OrangeOpus, GiantsHorn],
  relatedCards: () => [PixieOfGluttony, Ragnarok]
}
