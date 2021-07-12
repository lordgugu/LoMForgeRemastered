import { Witch } from 'model/Cards/None'
import { ActiveItem } from 'model/Items'
import { Vials } from 'model/Items/Vials'
import { TemperingProject } from 'model/Projects'

export const Mercury: ActiveItem = {
  id: 'Mercury',
  name: 'Mercury',
  category: Vials,
  energy: 24,
  activate: activateMercury,
  relatedCards: () => [Witch]
}

function activateMercury(project: TemperingProject) {
  const { energy } = project

  if (energy >= 4) {
    project.cards.pending = Witch
  }
}
