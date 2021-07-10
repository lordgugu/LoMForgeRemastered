import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { HP, incrementStat, widenStatRange } from 'model/Stats'

export const Mangoelephant: ActiveItem = {
  id: 'Mangoelephant',
  name: 'Mangoelephant',
  category: Produce,
  energy: 64,
  activate: activateMangoelephant,
  relatedStats: () => [HP],
  relatedStatRanges: () => [HP]
}

function activateMangoelephant(project: TemperingProject) {
  widenStatRange(project, HP, -5, 10)
  incrementStat(project, HP)
}
