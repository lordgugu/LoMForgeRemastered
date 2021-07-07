import { ActiveCard, EvilGod } from 'model/Cards'
import { VampireFang } from 'model/Items'
import { PixieOfSloth } from '../Pixie'
import { Ragnarok } from '../World'

export const WitchOfMoon: ActiveCard = {
  id: 'WitchOfMoon',
  name: 'Witch of Moon',
  category: EvilGod,
  price: 6660,
  activate: (project, slot) => {},
  relatedItems: () => [VampireFang],
  relatedCards: () => [PixieOfSloth, Ragnarok]
}
