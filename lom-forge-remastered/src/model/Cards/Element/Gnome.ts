import { ActiveCard, Bottom, CardSlot, Element, Middle, Top } from 'model/Cards'
import { Gnome as GnomeEssence, taint } from 'model/Essences'
import { GnomeGold, GnomeSilver } from 'model/Items/Coins'
import { Earthstone } from 'model/Items/MagicStones'
import { TemperingProject } from 'model/Projects'
import { Defense, incrementStat } from 'model/Stats'

export const Gnome: ActiveCard = {
  id: 'Gnome',
  name: 'Gnome',
  category: Element,
  price: 250,
  activate: activateGnome,
  relatedItems: () => [GnomeGold, GnomeSilver, Earthstone],
  relatedStats: () => [Defense],
  relatedEssences: () => [GnomeEssence]
}

function activateGnome(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      incrementStat(project, Defense)
      taint(project, GnomeEssence)
      break
  }
}
