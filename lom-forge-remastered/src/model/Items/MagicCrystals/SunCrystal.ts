import { SunGod } from 'model/Cards'
import { taint, totalLevels, Wisp } from 'model/Essences'
import { Item, MagicCrystals } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const SunCrystal: Item = {
  id: 'SunCrystal',
  name: 'Sun Crystal',
  category: MagicCrystals,
  energy: 48,
  activate: activateSunCrystal,
  relatedCards: () => [SunGod],
  relatedEssences: () => [Wisp]
}

function activateSunCrystal(project: TemperingProject) {
  const { energy } = project
  const { wisp } = project.levels
  const total = totalLevels(project)

  if (wisp >= 3 && total >= 5 && energy >= 8) {
    project.mysticPowers.prehidden = SunGod
  }

  taint(project, Wisp)
}
