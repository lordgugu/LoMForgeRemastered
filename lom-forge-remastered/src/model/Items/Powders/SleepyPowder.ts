import { PixieOfEnvy } from 'model/Cards'
import { Item, Powders } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const SleepyPowder: Item = {
  id: 'SleepyPowder',
  name: 'Sleepy Powder',
  category: Powders,
  energy: 8,
  activate: activateSleepyPowder,
  relatedCards: () => [PixieOfEnvy]
}

function activateSleepyPowder(project: TemperingProject) {
  const { energy } = project

  if (energy >= 4) {
    project.cards.pending = PixieOfEnvy
  }
}
