import { Metropolis } from 'model/Cards/Stage'
import { Salamander, Shade } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'

export const Dialaurel: ActiveItem = {
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
  const { shade, salamander } = project.levels

  if (salamander === 0 && shade > 0 && energy >= 8) {
    project.cards.pending = Metropolis
  }
}
