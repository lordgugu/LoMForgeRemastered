import { ActiveCard, Bottom, CardSlot, Element, Middle, Top } from 'model/Cards'
import { Aura as AuraEssence, taint } from 'model/Essences'
import { AuraGold, AuraSilver } from 'model/Items/Coins'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Luck } from 'model/Stats'

export const Aura: ActiveCard = {
  id: 'Aura',
  name: 'Aura',
  category: Element,
  price: 250,
  activate: activateAura,
  relatedItems: () => [AuraGold, AuraSilver],
  relatedStats: () => [Luck],
  relatedEssences: () => [AuraEssence]
}

function activateAura(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      incrementStat(project, Luck)
      taint(project, AuraEssence)
      break
  }
}
