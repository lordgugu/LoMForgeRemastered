import { Item, None } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { Charm, incrementStat } from 'model/Stats'

export const TakoBug: Item = {
  id: 'TakoBug',
  name: 'Tako Bug',
  category: None,
  energy: 8,
  activate: activateTakoBug,
  relatedStats: () => [Charm]
}

function activateTakoBug(project: TemperingProject) {
  incrementStat(project, Charm)
}
