import { FertilityGoddess } from 'model/Cards'
import { Dryad, totalLevels } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Urns } from 'model/Items/Urns'
import { TemperingProject } from 'model/Projects'

export const EarOfWheat: ActiveItem = {
  id: 'EarOfWheat',
  name: 'Ear of Wheat',
  category: Urns,
  energy: 24,
  activate: activateEarOfWheat,
  relatedCards: () => [FertilityGoddess],
  relatedEssences: () => [Dryad]
}

function activateEarOfWheat(project: TemperingProject) {
  const { energy } = project
  const { dryad } = project.levels
  const total = totalLevels(project)

  if (dryad >= 3 && total >= 5 && energy >= 8) {
    project.cards.pending = FertilityGoddess
  }
}
