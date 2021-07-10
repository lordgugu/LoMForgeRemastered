import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Power, widenStatRange } from 'model/Stats'

export const Boarmelon: ActiveItem = {
  id: 'Boarmelon',
  name: 'Boarmelon',
  category: Produce,
  energy: 32,
  activate: activateBoarmelon,
  relatedStats: () => [Power],
  relatedStatRanges: () => [Power]
}

function activateBoarmelon(project: TemperingProject) {
  widenStatRange(project, Power, -1, 3)
  incrementStat(project, Power)
}
