import { SunGod } from 'model/Cards/HeavenGod'
import { taint, totalLevels, Wisp } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { MagicCrystals } from 'model/Items/MagicCrystals'
import { TemperingProject } from 'model/Projects'

export const SunCrystal: ActiveItem = {
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
    project.cards.pending = SunGod
  }

  taint(project, Wisp)
}
