import { NymphOfOrchards } from 'model/Cards/Maiden'
import { totalLevels } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Skill, widenStatRange } from 'model/Stats'

export const Applesocks: ActiveItem = {
  id: 'Applesocks',
  name: 'Applesocks',
  category: Produce,
  energy: 64,
  activate: activateApplesocks,
  relatedCards: () => [NymphOfOrchards],
  relatedStats: () => [Skill],
  relatedStatRanges: () => [Skill]
}

function activateApplesocks(project: TemperingProject) {
  const { energy } = project
  const total = totalLevels(project)

  widenStatRange(project, Skill, -5, 10)
  incrementStat(project, Skill)

  if (total >= 5 && energy >= 16) {
    project.cards.hidden = NymphOfOrchards
  }
}
