import { PixieOfEnvy } from 'model/Cards'
import { ActiveItem } from 'model/Items'
import { Powders } from 'model/Items/Powders'
import { TemperingProject } from 'model/Projects'

export const SleepyPowder: ActiveItem = {
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
