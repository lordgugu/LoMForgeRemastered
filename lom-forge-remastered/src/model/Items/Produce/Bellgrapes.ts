import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Magic, widenStatRange } from 'model/Stats'

export const Bellgrapes: ActiveItem = {
  id: 'Bellgrapes',
  name: 'Bellgrapes',
  category: Produce,
  energy: 64,
  activate: activateBellgrapes,
  relatedStats: () => [Magic],
  relatedStatRanges: () => [Magic]
}

function activateBellgrapes(project: TemperingProject) {
  widenStatRange(project, Magic, -5, 10)
  incrementStat(project, Magic)
}
