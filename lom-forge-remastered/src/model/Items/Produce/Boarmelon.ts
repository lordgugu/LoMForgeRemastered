import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Power, widenStatRange } from 'model/Stats'

export const Boarmelon: Item = {
  id: 'Boarmelon',
  name: 'Boarmelon',
  category: Produce,
  energy: 32,
  activate: activateBoarmelon,
  relatedStats: () => [Power]
}

function activateBoarmelon(project: TemperingProject) {
  widenStatRange(project, Power, -1, 3)
  incrementStat(project, Power)
}
