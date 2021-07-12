import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import { None } from 'model/Cards/None'
import { Tower } from 'model/Cards/Stage'
import { Dryad, Gnome, resistance50, resistance75, Salamander, Wisp } from 'model/Essences'
import { Sulfur } from 'model/Items/Powders'
import { TemperingProject } from 'model/Projects'
import { AllStats, Charm, incrementStat, Magic, Spirit, widenStatRange } from 'model/Stats'

export const Sorcerer: ActiveCard = {
  id: 'Sorcerer',
  name: 'Sorcerer',
  category: None,
  price: 300,
  activate: activateSorcerer,
  relatedItems: () => [Sulfur],
  relatedCards: () => [Tower],
  relatedStats: () => [Magic, Spirit, Charm],
  relatedStatRanges: () => AllStats,
  relatedEssences: () => [Wisp, Dryad, Salamander, Gnome]
}

function activateSorcerer(project: TemperingProject, slot: CardSlot) {
  const { top, middle, bottom } = project.cards

  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      if (Array.of(top, middle, bottom).includes(Tower)) {
        AllStats.forEach((stat) => widenStatRange(project, stat, -3, 5))

        incrementStat(project, Magic)
        incrementStat(project, Spirit)
        incrementStat(project, Charm)

        resistance50(project, Wisp)
        resistance50(project, Dryad)
        resistance50(project, Salamander)
        resistance50(project, Gnome)
      } else {
        AllStats.forEach((stat) => widenStatRange(project, stat, -1, 3))

        incrementStat(project, Magic)

        resistance75(project, Wisp)
        resistance75(project, Dryad)
        resistance75(project, Salamander)
        resistance75(project, Gnome)
      }
      break
  }
}
