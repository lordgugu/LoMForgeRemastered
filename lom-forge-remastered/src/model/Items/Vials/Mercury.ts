import { Witch } from 'model/Cards'
import { Item, Vials } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Mercury: Item = {
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
