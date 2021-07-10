import { Sorcerer } from 'model/Cards'
import { ActiveItem } from 'model/Items'
import { Powders } from 'model/Items/Powders'
import { TemperingProject } from 'model/Projects'

export const Sulfur: ActiveItem = {
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
