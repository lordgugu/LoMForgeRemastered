import { DyingEarth } from 'model/Cards'
import { Item, Powders } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const GraveDirt: Item = {
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
