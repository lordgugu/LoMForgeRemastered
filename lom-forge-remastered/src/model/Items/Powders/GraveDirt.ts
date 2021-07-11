import { DyingEarth } from 'model/Cards/World'
import { ActiveItem } from 'model/Items'
import { Powders } from 'model/Items/Powders'
import { TemperingProject } from 'model/Projects'

export const GraveDirt: ActiveItem = {
  id: 'Grave Dirt',
  name: 'Grave Dirt',
  category: Powders,
  energy: 32,
  activate: activateGraveDirt,
  relatedCards: () => [DyingEarth]
}

function activateGraveDirt(project: TemperingProject) {
  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = DyingEarth
  }
}
