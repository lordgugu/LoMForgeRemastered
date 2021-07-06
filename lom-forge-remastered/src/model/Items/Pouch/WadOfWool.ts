import { Wanderer } from 'model/Cards'
import { Dryad, Shade, totalLevels } from 'model/Essences'
import { Item, Pouch } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const WadOfWool: Item = {
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
