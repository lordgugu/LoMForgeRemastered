import { ActiveItem } from 'model/Items'
import { None } from 'model/Items/None'
import { TemperingProject } from 'model/Projects'
import { HP, incrementStat } from 'model/Stats'

export const GreenballBun: ActiveItem = {
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
