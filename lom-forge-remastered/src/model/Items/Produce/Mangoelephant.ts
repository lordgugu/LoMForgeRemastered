import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { HP, incrementStat, widenStatRange } from 'model/Stats'

export const Mangoelephant: Item = {
  id: 'Mangoelephant',
  name: 'Mangoelephant',
  category: Produce,
  energy: 64,
  activate: activateMangoelephant,
  relatedStats: () => [HP]
}

function activateMangoelephant(project: TemperingProject) {
  widenStatRange(project, HP, -5, 10)
  incrementStat(project, HP)
}
