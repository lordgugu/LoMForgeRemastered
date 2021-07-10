import { ActiveItem } from 'model/Items'
import { None } from 'model/Items/None'
import { TemperingProject } from 'model/Projects'
import { Charm, incrementStat } from 'model/Stats'

export const TakoBug: ActiveItem = {
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
