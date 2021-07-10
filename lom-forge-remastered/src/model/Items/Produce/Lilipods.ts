import { EnticedNymph } from 'model/Cards'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Spirit, widenStatRange } from 'model/Stats'

export const Lilipods: ActiveItem = {
  id: 'Lilipods',
  name: 'Lilipods',
  category: Produce,
  energy: 8,
  activate: activateLilipods,
  relatedCards: () => [EnticedNymph],
  relatedStats: () => [Spirit],
  relatedStatRanges: () => [Spirit]
}

function activateLilipods(project: TemperingProject) {
  const { energy } = project

  widenStatRange(project, Spirit, -1, 3)
  incrementStat(project, Spirit)

  if (energy >= 8) {
    project.cards.pending = EnticedNymph
  }
}
