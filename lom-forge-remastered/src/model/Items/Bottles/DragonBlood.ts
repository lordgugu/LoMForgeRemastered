import { GodOfWar } from 'model/Cards'
import { Salamander, totalLevels } from 'model/Essences'
import { Bottles, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { AllStats, incrementStat } from 'model/Stats'

export const DragonBlood: Item = {
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
  const { sala } = project.levels
  const total = totalLevels(project)

  AllStats.forEach((stat) => incrementStat(project, stat))

  if (sala >= 3 && total >= 5 && energy >= 8) {
    project.cards.pending = GodOfWar
  }
}
