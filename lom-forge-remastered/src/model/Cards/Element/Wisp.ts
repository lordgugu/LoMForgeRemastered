import { ActiveCard, Bottom, CardSlot, Element, Middle, Top } from 'model/Cards'
import { taint, Wisp as WispEssence } from 'model/Essences'
import { WispGold, WispSilver } from 'model/Items/Coins'
import { TemperingProject } from 'model/Projects'
import { Charm, incrementStat } from 'model/Stats'

export const Wisp: ActiveCard = {
  id: 'Wisp',
  name: 'Wisp',
  category: Element,
  price: 250,
  activate: activateWisp,
  relatedItems: () => [WispGold, WispSilver],
  relatedStats: () => [Charm],
  relatedEssences: () => [WispEssence]
}

function activateWisp(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      incrementStat(project, Charm)
      taint(project, WispEssence)
      break
  }
}
