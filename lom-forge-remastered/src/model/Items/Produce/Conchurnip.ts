import { SpiritOfOcean } from 'model/Cards'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { Defense, incrementStat, widenStatRange } from 'model/Stats'

export const Conchurnip: Item = {
  id: 'Conchurnip',
  name: 'Conchurnip',
  category: Produce,
  energy: 16,
  activate: activateConchurnip,
  relatedCards: () => [SpiritOfOcean],
  relatedStats: () => [Defense]
}

function activateConchurnip(project: TemperingProject) {
  const { energy } = project

  widenStatRange(project, Defense, -1, 3)
  incrementStat(project, Defense)

  if (energy >= 16) {
    project.mysticPowers.prehidden = SpiritOfOcean
  }
}
