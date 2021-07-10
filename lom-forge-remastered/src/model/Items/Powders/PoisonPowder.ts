import { PixieOfWrath } from 'model/Cards'
import { ActiveItem } from 'model/Items'
import { Powders } from 'model/Items/Powders'
import { TemperingProject } from 'model/Projects'

export const PoisonPowder: ActiveItem = {
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
