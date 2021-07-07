import { ActiveCard, Bottom, CardSlot, Middle, None, Top, Tower } from 'model/Cards'
import { Aura, Jinn, resistance50, resistance75, Shade, Undine } from 'model/Essences'
import { Mercury } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { AllStats, Charm, incrementStat, Magic, Spirit, widenStatRange } from 'model/Stats'

export const Witch: ActiveCard = {
  id: 'Witch',
  name: 'Witch',
  category: None,
  price: 300,
  activate: activateWitch,
  relatedItems: () => [Mercury],
  relatedCards: () => [Tower],
  relatedStats: () => [Magic, Spirit, Charm],
  relatedStatRanges: () => AllStats,
  relatedEssences: () => [Shade, Aura, Jinn, Undine]
}

function activateWitch(project: TemperingProject, slot: CardSlot) {
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

        resistance50(project, Shade)
        resistance50(project, Aura)
        resistance50(project, Jinn)
        resistance50(project, Undine)
      } else {
        AllStats.forEach((stat) => widenStatRange(project, stat, -1, 3))

        incrementStat(project, Magic)

        resistance75(project, Shade)
        resistance75(project, Aura)
        resistance75(project, Jinn)
        resistance75(project, Undine)
      }
      break
  }
}
