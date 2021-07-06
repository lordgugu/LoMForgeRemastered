import { Volcano } from 'model/Cards'
import { Item, Powders } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Ash: Item = {
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
