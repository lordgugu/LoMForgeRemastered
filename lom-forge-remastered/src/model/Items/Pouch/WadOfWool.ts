import { Wanderer } from 'model/Cards/Noble'
import { Dryad, Shade, totalLevels } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Pouch } from 'model/Items/Pouch'
import { TemperingProject } from 'model/Projects'

export const WadOfWool: ActiveItem = {
  id: 'WadOfWool',
  name: 'Wad of Wool',
  category: Pouch,
  energy: 16,
  activate: activateWadOfWool,
  relatedCards: () => [Wanderer],
  relatedEssences: () => [Shade, Dryad]
}

function activateWadOfWool(project: TemperingProject) {
  const { energy } = project
  const { shade, dryad } = project.levels
  const total = totalLevels(project)

  if (shade > 0 && dryad > 0 && total >= 3 && energy >= 8) {
    project.cards.pending = Wanderer
  }
}
