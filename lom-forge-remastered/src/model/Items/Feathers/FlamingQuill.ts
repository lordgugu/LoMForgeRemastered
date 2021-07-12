import { Phoenix } from 'model/Cards/BeastGod'
import { Jinn, Salamander } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Feathers } from 'model/Items/Feathers'
import { TemperingProject } from 'model/Projects'
import { Power, setMinimumStatValue, widenStatRange } from 'model/Stats'

export const FlamingQuill: ActiveItem = {
  id: 'FlamingQuill',
  name: 'Flaming Quill',
  category: Feathers,
  energy: 64,
  activate: activateFlamingQuill,
  relatedCards: () => [Phoenix],
  relatedStats: () => [Power],
  relatedStatRanges: () => [Power],
  relatedEssences: () => [Salamander, Jinn]
}

function activateFlamingQuill(project: TemperingProject) {
  const { energy } = project
  const { salamander, jinn } = project.levels

  widenStatRange(project, Power, -3, 5)
  setMinimumStatValue(project, Power, 5)

  if (salamander >= 3 && jinn >= 3 && energy >= 4) {
    project.cards.pending = Phoenix
  }
}
