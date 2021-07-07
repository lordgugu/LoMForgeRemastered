import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Magic, widenStatRange } from 'model/Stats'

export const Bellgrapes: Item = {
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
