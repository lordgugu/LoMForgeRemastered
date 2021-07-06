import { Metropolis } from 'model/Cards'
import { Salamander, Shade } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Dialaurel: Item = {
  id: 'Dialaurel',
  name: 'Dialaurel',
  category: Produce,
  energy: 64,
  activate: activateDialaurel,
  relatedCards: () => [Metropolis],
  relatedEssences: () => [Shade, Salamander]
}

function activateDialaurel(project: TemperingProject) {
  const { energy } = project
  const { shade, sala } = project.levels

  if (sala === 0 && shade > 0 && energy >= 8) {
    project.cards.pending = Metropolis
  }
}
