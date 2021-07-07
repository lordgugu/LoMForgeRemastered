import { ActiveCard, Bottom, CardSlot, Element, Middle, Top } from 'model/Cards'
import { taint, Undine as UndineEssence } from 'model/Essences'
import { UndineGold, UndineSilver } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Magic } from 'model/Stats'

export const Undine: ActiveCard = {
  id: 'Undine',
  name: 'Undine',
  category: Element,
  price: 250,
  activate: activateUndine,
  relatedItems: () => [UndineGold, UndineSilver],
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
