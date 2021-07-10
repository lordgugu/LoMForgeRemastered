import { MoonGoddess } from 'model/Cards'
import { Shade, taint, totalLevels } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { MagicCrystals } from 'model/Items/MagicCrystals'
import { TemperingProject } from 'model/Projects'

export const MoonCrystal: ActiveItem = {
  id: 'MoonCrystal',
  name: 'Moon Crystal',
  category: MagicCrystals,
  energy: 48,
  activate: activateMoonCrystal,
  relatedCards: () => [MoonGoddess],
  relatedEssences: () => [Shade]
}

function activateMoonCrystal(project: TemperingProject) {
  const { shade } = project.levels
  const total = totalLevels(project)

  if (shade >= 3 && total >= 5) {
    project.cards.pending = MoonGoddess
  }

  taint(project, Shade)
}
