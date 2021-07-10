import { Shade, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { AllStats, incrementStat } from 'model/Stats'

export const Toadstoolshed: ActiveItem = {
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
