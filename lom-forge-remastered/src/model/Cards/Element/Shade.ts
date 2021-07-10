import { ActiveCard, Bottom, CardSlot, Element, Middle, Top } from 'model/Cards'
import { Shade as ShadeEssence, taint } from 'model/Essences'
import { ShadeGold, ShadeSilver } from 'model/Items/Coins'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Spirit } from 'model/Stats'

export const Shade: ActiveCard = {
  id: 'Shade',
  name: 'Shade',
  category: Element,
  price: 250,
  activate: activateShade,
  relatedItems: () => [ShadeGold, ShadeSilver],
  relatedStats: () => [Spirit],
  relatedEssences: () => [ShadeEssence]
}

function activateShade(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      incrementStat(project, Spirit)
      taint(project, ShadeEssence)
      break
  }
}
