import { Volcano } from 'model/Cards'
import { ActiveItem } from 'model/Items'
import { Powders } from 'model/Items/Powders'
import { TemperingProject } from 'model/Projects'

export const Ash: ActiveItem = {
  id: 'Ash',
  name: 'Ash',
  category: Powders,
  energy: 16,
  activate: activateAsh,
  relatedCards: () => [Volcano]
}

function activateAsh(project: TemperingProject) {
  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = Volcano
  }
}
