import { OceanGod } from 'model/Cards'
import { totalLevels, Undine } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Orcaplant: Item = {
  id: 'Orcaplant',
  name: 'Orcaplant',
  category: Produce,
  energy: 24,
  activate: activateOrcaplant,
  relatedCards: () => [OceanGod],
  relatedEssences: () => [Undine]
}

function activateOrcaplant(project: TemperingProject) {
  const { undine } = project.levels
  const total = totalLevels(project)

  if (undine >= 3 && total >= 5) {
    project.cards.pending = OceanGod
  }
}
