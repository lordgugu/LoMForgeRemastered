import { ActiveCard, Bottom, CardSlot, Element, Middle, Top } from 'model/Cards'
import { Dryad as DryadEssence, taint } from 'model/Essences'
import { DryadGold, DryadSilver } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { HP, incrementStat } from 'model/Stats'

export const Dryad: ActiveCard = {
  id: 'Dryad',
  name: 'Dryad',
  category: Element,
  price: 250,
  activate: activateDryad,
  relatedItems: () => [DryadGold, DryadSilver],
  relatedStats: () => [HP],
  relatedEssences: () => [DryadEssence]
}

function activateDryad(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      incrementStat(project, HP)
      taint(project, DryadEssence)
      break
  }
}
