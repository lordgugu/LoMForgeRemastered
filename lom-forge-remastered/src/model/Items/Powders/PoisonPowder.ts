import { PixieOfWrath } from 'model/Cards'
import { Item, Powders } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const PoisonPowder: Item = {
  id: 'PoisonPowder',
  name: 'Poison Powder',
  category: Powders,
  energy: 8,
  activate: activatePoisonPowder,
  relatedCards: () => [PixieOfWrath]
}

function activatePoisonPowder(project: TemperingProject) {
  const { energy } = project

  if (energy >= 4) {
    project.cards.pending = PixieOfWrath
  }
}
