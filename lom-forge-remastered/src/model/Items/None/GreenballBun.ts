import { Item, None } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { HP, incrementStat } from 'model/Stats'

export const GreenballBun: Item = {
  id: 'GreenballBun',
  name: 'Greenball Bun',
  category: None,
  energy: 8,
  activate: activateGreenballBun,
  relatedStats: () => [HP]
}

function activateGreenballBun(project: TemperingProject) {
  incrementStat(project, HP)
}
