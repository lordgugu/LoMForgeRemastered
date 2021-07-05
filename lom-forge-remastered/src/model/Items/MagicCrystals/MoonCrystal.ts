import { MoonGoddess } from 'model/Cards'
import { Shade, taint, totalLevels } from 'model/Essences'
import { Item, MagicCrystals } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const MoonCrystal: Item = {
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
    project.mysticPowers.prehidden = MoonGoddess
  }

  taint(project, Shade)
}
