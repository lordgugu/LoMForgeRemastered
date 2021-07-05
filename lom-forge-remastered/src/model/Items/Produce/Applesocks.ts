import { NymphOfOrchards } from 'model/Cards'
import { totalLevels } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { incrementStat, Skill, widenStatRange } from 'model/Stats'

export const Applesocks: Item = {
  id: 'Applesocks',
  name: 'Applesocks',
  category: Produce,
  energy: 64,
  activate: activateApplesocks,
  relatedCards: () => [NymphOfOrchards],
  relatedStats: () => [Skill]
}

function activateApplesocks(project: TemperingProject) {
  const { energy } = project
  const total = totalLevels(project)

  widenStatRange(project, Skill, -5, 10)
  incrementStat(project, Skill)

  if (total >= 5 && energy >= 16) {
    project.mysticPowers.hidden = NymphOfOrchards
  }
}
