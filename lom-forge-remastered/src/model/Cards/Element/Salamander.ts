import { ActiveCard, Bottom, CardSlot, Element, Middle, Top } from 'model/Cards'
import { Salamander as SalamanderEssence, taint } from 'model/Essences'
import { SalamanderGold, SalamanderSilver } from 'model/Items/Coins'
import { Firestone } from 'model/Items/MagicStones'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Power } from 'model/Stats'

export const Salamander: ActiveCard = {
  id: 'Salamander',
  name: 'Salamander',
  category: Element,
  price: 250,
  activate: activateSalamander,
  relatedItems: () => [SalamanderGold, SalamanderSilver, Firestone],
  relatedStats: () => [Power],
  relatedEssences: () => [SalamanderEssence]
}

function activateSalamander(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      incrementStat(project, Power)
      taint(project, SalamanderEssence)
      break
  }
}
