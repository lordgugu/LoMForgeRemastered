import { Shade, taint } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { AllStats, incrementStat } from 'model/Stats'

export const Toadstoolshed: Item = {
  id: 'Toadstoolshed',
  name: 'Toadstoolshed',
  category: Produce,
  energy: 64,
  activate: activateToastoolshed,
  relatedStats: () => AllStats,
  relatedEssences: () => [Shade]
}

function activateToastoolshed(project: TemperingProject) {
  AllStats.forEach((stat) => incrementStat(project, stat))

  taint(project, Shade)
}
