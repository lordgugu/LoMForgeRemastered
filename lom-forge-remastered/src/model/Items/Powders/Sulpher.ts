import { Sorcerer } from 'model/Cards'
import { Item, Powders } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Sulpher: Item = {
  id: 'Sulpher',
  name: 'Sulpher',
  category: Powders,
  energy: 24,
  activate: activateSulpher,
  relatedCards: () => [Sorcerer]
}

function activateSulpher(project: TemperingProject) {
  const { energy } = project

  if (energy >= 4) {
    project.cards.pending = Sorcerer
  }
}
