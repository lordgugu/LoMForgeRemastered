import { SpiritOfOcean } from 'model/Cards/Spirit'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { Defense, incrementStat, widenStatRange } from 'model/Stats'

export const Conchurnip: ActiveItem = {
  id: 'Conchurnip',
  name: 'Conchurnip',
  category: Produce,
  energy: 16,
  activate: activateConchurnip,
  relatedCards: () => [SpiritOfOcean],
  relatedStats: () => [Defense],
  relatedStatRanges: () => [Defense]
}

function activateConchurnip(project: TemperingProject) {
  const { energy } = project

  widenStatRange(project, Defense, -1, 3)
  incrementStat(project, Defense)

  if (energy >= 16) {
    project.cards.pending = SpiritOfOcean
  }
}
