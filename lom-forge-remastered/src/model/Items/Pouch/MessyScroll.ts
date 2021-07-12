import { Sage } from 'model/Cards/Noble'
import { Jinn, totalLevels, Undine } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Pouch } from 'model/Items/Pouch'
import { TemperingProject } from 'model/Projects'

export const MessyScroll: ActiveItem = {
  id: 'MessyScroll',
  name: 'Messy Scroll',
  category: Pouch,
  energy: 16,
  activate: activateMessyScroll,
  relatedCards: () => [Sage],
  relatedEssences: () => [Jinn, Undine]
}

function activateMessyScroll(project: TemperingProject) {
  const { energy } = project
  const { jinn, undine } = project.levels
  const total = totalLevels(project)

  if (jinn > 0 && undine > 0 && total >= 3 && energy >= 8) {
    project.cards.pending = Sage
  }
}
