import { NymphOfTheSky } from 'model/Cards'
import { totalLevels, Wisp } from 'model/Essences'
import { Feathers, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { setMinimumStatValue, Skill, widenStatRange } from 'model/Stats'

export const WhiteFeather: Item = {
  id: 'WhiteFeather',
  name: 'White Feather',
  category: Feathers,
  energy: 32,
  activate: activateWhiteFeather,
  relatedCards: () => [NymphOfTheSky],
  relatedStats: () => [Skill],
  relatedStatRanges: () => [Skill],
  relatedEssences: () => [Wisp]
}

function activateWhiteFeather(project: TemperingProject) {
  const { energy } = project
  const { wisp } = project.levels
  const total = totalLevels(project)

  widenStatRange(project, Skill, -3, 5)
  setMinimumStatValue(project, Skill, 5)

  if (wisp > 0 && total >= 3 && energy >= 8) {
    project.cards.pending = NymphOfTheSky
  }
}
