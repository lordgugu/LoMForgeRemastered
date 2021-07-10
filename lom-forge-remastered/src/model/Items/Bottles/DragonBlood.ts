import { GodOfWar } from 'model/Cards'
import { Salamander, totalLevels } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Bottles } from 'model/Items/Bottles'
import { TemperingProject } from 'model/Projects'
import { AllStats, incrementStat } from 'model/Stats'

export const DragonBlood: ActiveItem = {
  id: 'DragonBlood',
  name: 'Dragon Blood',
  category: Bottles,
  energy: 64,
  activate: activateDragonBlood,
  relatedCards: () => [GodOfWar],
  relatedStats: () => AllStats,
  relatedEssences: () => [Salamander]
}

function activateDragonBlood(project: TemperingProject) {
  const { energy } = project
  const { salamander } = project.levels
  const total = totalLevels(project)

  AllStats.forEach((stat) => incrementStat(project, stat))

  if (salamander >= 3 && total >= 5 && energy >= 8) {
    project.cards.pending = GodOfWar
  }
}
