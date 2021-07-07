import { Sorcerer } from 'model/Cards'
import { Item, Powders } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Sulfur: Item = {
  id: 'Sulfur',
  originalName: 'Sulpher',
  remasteredName: 'Sulfur',
  category: Powders,
  energy: 24,
  activate: activateSulfur,
  relatedCards: () => [Sorcerer]
}

function activateSulfur(project: TemperingProject) {
  const { energy } = project

  if (energy >= 4) {
    project.cards.pending = Sorcerer
  }
}
