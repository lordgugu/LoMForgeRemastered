import { OceanGod } from 'model/Cards'
import { taint, totalLevels, Undine } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Squalphin: Item = {
  id: 'Squalphin',
  name: 'Squalphin',
  category: Produce,
  energy: 16,
  activate: activateSqualphin,
  relatedCards: () => [OceanGod],
  relatedEssences: () => [Undine]
}

function activateSqualphin(project: TemperingProject) {
  const { energy } = project
  const { undine } = project.levels
  const total = totalLevels(project)

  if (undine >= 3 && total >= 5 && energy >= 8) {
    project.cards.pending = OceanGod
  }

  taint(project, Undine)
}
