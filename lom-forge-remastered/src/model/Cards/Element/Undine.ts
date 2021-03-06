import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import { Element } from 'model/Cards/Element'
import { taint, Undine as UndineEssence } from 'model/Essences'
import { UndineGold, UndineSilver } from 'model/Items/Coins'
import { Waterstone } from 'model/Items/MagicStones'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Magic } from 'model/Stats'

export const Undine: ActiveCard = {
  id: 'Undine',
  name: 'Undine',
  category: Element,
  price: 250,
  activate: activateUndine,
  relatedItems: () => [UndineGold, UndineSilver, Waterstone],
  relatedStats: () => [Magic],
  relatedEssences: () => [UndineEssence]
}

function activateUndine(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      incrementStat(project, Magic)
      taint(project, UndineEssence)
      break
  }
}
