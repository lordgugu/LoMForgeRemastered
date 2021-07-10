import { Raven } from 'model/Cards'
import { Shade, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Feathers } from 'model/Items/Feathers'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Spirit, widenStatRange } from 'model/Stats'

export const RavenFeather: ActiveItem = {
  id: 'RavenFeather',
  name: 'Raven Feather',
  category: Feathers,
  energy: 24,
  activate: activateRavenFeather,
  relatedCards: () => [Raven],
  relatedStats: () => [Spirit],
  relatedStatRanges: () => [Spirit],
  relatedEssences: () => [Shade]
}

function activateRavenFeather(project: TemperingProject) {
  const { energy } = project

  widenStatRange(project, Spirit, -3, 5)
  incrementStat(project, Spirit)

  if (energy >= 8) {
    project.cards.pending = Raven
  }

  taint(project, Shade)
}
