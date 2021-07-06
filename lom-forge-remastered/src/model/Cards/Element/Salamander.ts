import { Bottom, Card, CardSlot, Element, Middle, Top } from 'model/Cards'
import { Salamander as SalamanderEssence, taint } from 'model/Essences'
import { SalaGold, SalaSilver } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Power } from 'model/Stats'

export const Salamander: Card = {
  id: 'Salamander',
  name: 'Salamander',
  category: Element,
  price: 250,
  activate: activateSalamander,
  relatedItems: () => [SalaGold, SalaSilver],
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
